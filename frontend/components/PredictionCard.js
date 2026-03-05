export default function PredictionCard({ prediction }) {
  const [home, draw, away] = prediction.winProbability;
  return (
    <div className="card space-y-3">
      <h3 className="font-heading font-bold text-xl">{prediction.match}</h3>
      <p className="text-muted">xG Model: {prediction.expectedGoals[0]} - {prediction.expectedGoals[1]}</p>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden flex">
        <div className="bg-accent" style={{ width: `${home}%` }} />
        <div className="bg-slate-500" style={{ width: `${draw}%` }} />
        <div className="bg-blue-500" style={{ width: `${away}%` }} />
      </div>
      <p className="text-sm text-muted">Win/Draw/Loss: {home}% / {draw}% / {away}% · Confidence: {prediction.confidence}%</p>
    </div>
  );
}
