'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageIntro from '@/components/PageIntro';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (!res.ok) {
      setError('Invalid credentials');
      return;
    }
    const data = await res.json();
    localStorage.setItem('mda_token', data.token);
    router.push('/admin/dashboard');
  };

  return (
    <div className="max-w-lg mx-auto">
      <PageIntro title="Admin Login" subtitle="Secure access to publish analysis and predictions" />
      <form onSubmit={submit} className="card space-y-4">
        <input className="w-full bg-black/30 border border-white/20 rounded p-3" placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full bg-black/30 border border-white/20 rounded p-3" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="bg-accent text-black font-semibold px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
