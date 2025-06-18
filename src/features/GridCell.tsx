'use client';

import { useGrid } from '@/stores/gridData';
import { useCallback, useMemo, useState } from 'react';

interface GridCellProps {
  x: number;
  y: number;
}

const GridCell = ({ x, y }: GridCellProps) => {
  const [option, setoption] = useState<string | null>(null);
  const [visible, setvisible] = useState<boolean>(false);

  const gridStore = useGrid();
  const addCell = useCallback(() => {
    gridStore.addCell({ x, y, option: gridStore.option });
    setoption(gridStore.option);
    setvisible((v) => !v);
  }, [gridStore, x, y]);

  const cellColor = useMemo(() => {
    if (option === 'E' && visible) {
      return 'bg-green-500';
    }
    if (option === 'S' && visible) {
      return 'bg-red-500';
    }
    if (option === null && visible) {
      return 'bg-blue-500';
    }
    return 'bg-slate-500';
  }, [option, visible]);

  return <div className={`w-3 h-3 rounded-sm ${cellColor}`} onClick={addCell}></div>;
};

export default GridCell;
