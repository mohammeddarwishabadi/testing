import PageIntro from '@/components/PageIntro';
import PostCard from '@/components/PostCard';
import { blogPosts } from '@/lib/dummyData';

export default function BlogPage() {
  return (
    <div>
      <PageIntro title="Blog & Articles" subtitle="Long-form football analytics and methodology breakdowns" />
      <div className="grid md:grid-cols-2 gap-5">
        {blogPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
