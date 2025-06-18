'use client';

import { useGrid } from '@/stores/gridData';
import { useCallback } from 'react';

const ExportFile = () => {
  const gridStore = useGrid();
  const handleDownload = useCallback(() => {
    let buffer = '99 99 \n'; // Buffer room
    const entrance = gridStore.data.find((room) => room.option === 'E');
    // Insert the entrance
    if (entrance) {
      buffer += `${entrance.x} ${entrance.y}\n`;
    }
    const exit = gridStore.data.find((room) => room.option === 'S');
    // Insert the exit
    if (exit) {
      buffer += `${exit.x} ${exit.y}\n`;
    }
    // Copy the data w/out entrance & Exit
    const data = gridStore.data.filter((room) => room.option !== 'E' && room.option !== 'S');
    data.forEach((room) => {
      buffer += `${room.x} ${room.y}${room.option ? ' ' + room.option + '\n' : '\n'}`;
    });
    const blob = new Blob([buffer], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'level.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [gridStore.data]);
  return (
    <button className="bg-indigo-500 text-white w-fit py-2 px-4 cursor-pointer rounded-lg" onClick={handleDownload}>
      Export
    </button>
  );
};

export default ExportFile;
