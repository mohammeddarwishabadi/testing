import PageIntro from '@/components/PageIntro';
import PredictionCard from '@/components/PredictionCard';
import { predictions } from '@/lib/dummyData';

export default function PredictionsPage() {
  return (
    <div>
      <PageIntro title="Predictions" subtitle="Probabilistic forecasts for upcoming fixtures" />
      <div className="grid md:grid-cols-2 gap-5">
        {predictions.map((prediction) => <PredictionCard key={prediction.id} prediction={prediction} />)}
      </div>
    </div>
  );
}
