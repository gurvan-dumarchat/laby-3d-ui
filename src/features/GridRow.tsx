'use client';

import { useMemo } from 'react';
import GridCell from './GridCell';

interface GridRowProps {
  x: number;
  size: number;
}

const GridRow = ({ x, size }: GridRowProps) => {
  const cells = useMemo(() => {
    const cellArray = [];
    for (let i = 0; i < size; i++) {
      cellArray.push(<GridCell x={x} y={i} key={`${x}/${i}`} />);
    }
    return cellArray;
  }, [x, size]);
  return (
    <div className="flex gap-1 justify-end items-center h-4">
      <p>{x}</p>
      <div className="flex gap-1">{cells}</div>
    </div>
  );
};

export default GridRow;
