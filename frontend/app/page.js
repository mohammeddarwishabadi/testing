import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import PostCard from '@/components/PostCard';
import PredictionCard from '@/components/PredictionCard';
import MatchStatsCard from '@/components/MatchStatsCard';
import { analysisPosts, predictions } from '@/lib/dummyData';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card flex flex-col md:flex-row items-center gap-8 shadow-glow">
        <Image src="/logo.png" alt="MDA Logo" width={180} height={180} className="rounded-xl border border-accent/30" />
        <div>
          <PageIntro title="MDA | Football Analysis" subtitle="Football truth through data" />
          <Link href="/analysis" className="inline-block bg-accent text-black font-bold px-5 py-3 rounded-lg hover:opacity-90 transition">
            Explore Match Analysis
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Featured Analysis Posts</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {analysisPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>

      <section>
        <h2 className="section-title">Latest Predictions</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {predictions.map((p) => <PredictionCard key={p.id} prediction={p} />)}
        </div>
      </section>

      <section>
        <h2 className="section-title">Recent Statistics</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {analysisPosts.map((post) => <MatchStatsCard key={`${post.id}-stats`} post={post} />)}
        </div>
      </section>
    </div>
  );
}
