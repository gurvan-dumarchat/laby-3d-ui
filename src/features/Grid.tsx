'use client';

import { useMemo } from 'react';
import GridRow from './GridRow';

type GridProps = {
  size: number;
};

const Grid = ({ size }: GridProps) => {
  const rows = useMemo(() => {
    const rowArray = [];
    for (let i = 0; i < size; i++) {
      rowArray.push(<GridRow x={i} size={size} key={i} />);
    }
    return rowArray;
  }, [size]);
  return <div className="flex flex-col">{rows}</div>;
};

export default Grid;
