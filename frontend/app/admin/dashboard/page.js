'use client';

import { useState } from 'react';
import PageIntro from '@/components/PageIntro';

const initialPost = {
  title: '',
  match: '',
  teams: '',
  analysis_text: '',
  xg: '',
  shots: '',
  possession: ''
};

export default function AdminDashboardPage() {
  const [post, setPost] = useState(initialPost);
  const [status, setStatus] = useState('');

  const createPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('mda_token');
    const payload = {
      ...post,
      teams: post.teams.split(',').map((team) => team.trim()),
      stats: {},
      charts: []
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? 'Post created.' : 'Failed to create post.');
    if (res.ok) setPost(initialPost);
  };

  return (
    <div className="space-y-8">
      <PageIntro title="Admin Dashboard" subtitle="Create, edit, delete posts and publish predictions" />
      <form onSubmit={createPost} className="card grid md:grid-cols-2 gap-4">
        <input className="bg-black/30 border border-white/20 rounded p-3" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <input className="bg-black/30 border border-white/20 rounded p-3" placeholder="Match" value={post.match} onChange={(e) => setPost({ ...post, match: e.target.value })} />
        <input className="bg-black/30 border border-white/20 rounded p-3 md:col-span-2" placeholder="Teams (comma-separated)" value={post.teams} onChange={(e) => setPost({ ...post, teams: e.target.value })} />
        <textarea className="bg-black/30 border border-white/20 rounded p-3 md:col-span-2" rows="4" placeholder="Analysis text" value={post.analysis_text} onChange={(e) => setPost({ ...post, analysis_text: e.target.value })} />
        <input className="bg-black/30 border border-white/20 rounded p-3" placeholder="xG" value={post.xg} onChange={(e) => setPost({ ...post, xg: e.target.value })} />
        <input className="bg-black/30 border border-white/20 rounded p-3" placeholder="Shots" value={post.shots} onChange={(e) => setPost({ ...post, shots: e.target.value })} />
        <input className="bg-black/30 border border-white/20 rounded p-3" placeholder="Possession" value={post.possession} onChange={(e) => setPost({ ...post, possession: e.target.value })} />
        <button className="bg-accent text-black font-semibold px-4 py-2 rounded md:col-span-2">Create Analysis Post</button>
      </form>
      {status && <p className="text-accent">{status}</p>}
    </div>
  );
}
