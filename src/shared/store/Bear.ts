import create from 'zustand';

interface IState {
  bearsCount: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<IState>((set) => ({
  bearsCount: 0,
  increasePopulation: () => set((state) => ({ bearsCount: state.bearsCount + 1 })),
  removeAllBears: () => set({ bearsCount: 0 }),
}));

export default useBearStore;
