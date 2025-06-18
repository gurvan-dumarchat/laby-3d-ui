import { create } from 'zustand';

interface CellData {
  x: number;
  y: number;
  option: string | null;
}

interface GridStore {
  data: CellData[];
  addCell: (c: CellData) => void;
  option: string | null;
  setOption: (o: string | null) => void;
}

export const useGrid = create<GridStore>((set) => ({
  data: [],
  addCell: (c) =>
    set((state) => {
      const { data, option } = addCellFlow(state.data, state.option, c);
      return { data, option };
    }),
  option: 'E',
  setOption: (o) => set(() => ({ option: o })),
}));

const addCellFlow = (data: CellData[], option: string | null, newCell: CellData) => {
  const existingCondition = (cell: CellData) => newCell.x === cell.x && newCell.y === cell.y;
  const existing = data.find(existingCondition);
  if (existing) {
    return {
      option,
      data: data.filter((cell) => cell.x !== newCell.x || cell.y !== newCell.y),
    };
  }
  if (option === 'E') {
    return {
      option: 'S',
      data: [...data, newCell],
    };
  }
  if (option === 'S') {
    return {
      option: null,
      data: [...data, newCell],
    };
  }
  return {
    option: option,
    data: [...data, newCell],
  };
};
