export default function PostCard({ post }) {
  return (
    <article className="card space-y-3">
      <p className="text-xs uppercase tracking-wider text-accent">{post.match}</p>
      <h3 className="font-heading font-bold text-xl">{post.title}</h3>
      <p className="text-muted">{post.insight || post.excerpt}</p>
    </article>
  );
}
