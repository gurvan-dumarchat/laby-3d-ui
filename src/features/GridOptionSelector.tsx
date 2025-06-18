'use client';

import { useGrid } from '@/stores/gridData';

const GridOptionSelector = () => {
  const gridStore = useGrid();
  console.log(gridStore.data);

  return (
    <div>
      <p>Option sélectionnée actuellement : {gridStore.option ?? 'Aucune'}</p>
    </div>
  );
};

export default GridOptionSelector;
