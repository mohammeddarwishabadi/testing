'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/analysis', 'Analysis'],
  ['/predictions', 'Predictions'],
  ['/data-viz', 'Data Viz'],
  ['/blog', 'Blog'],
  ['/admin/login', 'Admin']
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-lg tracking-wide text-accent">
          MDA | Football Analysis
        </Link>
        <div className="flex gap-2 md:gap-4 text-sm md:text-base">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`px-2 py-1 rounded transition ${pathname === href ? 'text-accent bg-white/10' : 'text-slate-200 hover:text-accent'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
