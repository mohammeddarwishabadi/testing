export default function MatchStatsCard({ post }) {
  const { stats, teams } = post;
  return (
    <div className="card">
      <h3 className="font-heading text-xl font-bold mb-4">{teams[0]} vs {teams[1]}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
        <div className="p-3 bg-black/20 rounded">xG: {stats.xgHome} - {stats.xgAway}</div>
        <div className="p-3 bg-black/20 rounded">Shots: {stats.shotsHome} - {stats.shotsAway}</div>
        <div className="p-3 bg-black/20 rounded">Possession: {stats.possessionHome}% - {stats.possessionAway}%</div>
      </div>
    </div>
  );
}
