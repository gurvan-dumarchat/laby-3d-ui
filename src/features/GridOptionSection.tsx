'use client';

import { useGrid } from '@/stores/gridData';
import GridOptionSelect from './GridOptionSelect';

const GridOptionSection = () => {
  const gridStore = useGrid();
  console.log(gridStore.data);

  return (
    <div>
      <GridOptionSelect />
    </div>
  );
};

export default GridOptionSection;
