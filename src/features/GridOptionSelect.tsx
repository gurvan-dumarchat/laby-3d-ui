'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGrid } from '@/stores/gridData';
import { useCallback, useEffect, useMemo, useState } from 'react';

const GridOptionSelect = () => {
  const gridStore = useGrid();
  const [value, setValue] = useState<string | null>(gridStore.option);
  const updateGridOption = useCallback(
    (o: string) => {
      gridStore.setOption(o === 'ROOM' ? null : o);
    },
    [gridStore]
  );

  const entraceExists = useMemo(() => {
    return gridStore.data.find((cell) => cell.option === 'E') !== undefined;
  }, [gridStore.data]);

  const exitExists = useMemo(() => {
    return gridStore.data.find((cell) => cell.option === 'S') !== undefined;
  }, [gridStore.data]);

  useEffect(() => {
    setValue(gridStore.option);
  }, [gridStore.option]);

  return (
    <div>
      <p className="text-sm my-2 font-semibold">Type de salle</p>
      <Select value={value ?? 'ROOM'} onValueChange={(val) => updateGridOption(val)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {/* Ajoutez vos options ici */}
          <SelectItem value="ROOM">Salle normale</SelectItem>
          {!entraceExists && <SelectItem value="E">Entrée</SelectItem>}
          {!exitExists && <SelectItem value="S">Sortie</SelectItem>}
          <SelectItem value="EM">Escalier Montant</SelectItem>
          <SelectItem value="ED">Escalier Descendant</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GridOptionSelect;
