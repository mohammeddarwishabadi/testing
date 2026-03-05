import PageIntro from '@/components/PageIntro';
import MatchStatsCard from '@/components/MatchStatsCard';
import PostCard from '@/components/PostCard';
import { analysisPosts } from '@/lib/dummyData';

export default function AnalysisPage() {
  return (
    <div>
      <PageIntro title="Match Analysis" subtitle="xG, shots, possession and tactical insights" />
      <div className="space-y-5">
        {analysisPosts.map((post) => (
          <div key={post.id} className="grid lg:grid-cols-2 gap-4">
            <PostCard post={post} />
            <MatchStatsCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
