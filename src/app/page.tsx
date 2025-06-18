import ExportFile from '@/features/ExportFile';
import Grid from '@/features/Grid';
import GridOptionSection from '@/features/GridOptionSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Maze level generator</h1>
      <div className="flex gap-4 w-full items-center justify-center">
        <Grid size={40} />
        <GridOptionSection />
      </div>
      <ExportFile />
    </div>
  );
}
