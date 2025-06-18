import Grid from '@/features/Grid';
import GridOptionSelector from '@/features/GridOptionSelector';

export default function Home() {
  return (
    <div className="flex gap-4">
      <Grid size={40} />
      <GridOptionSelector />
    </div>
  );
}
