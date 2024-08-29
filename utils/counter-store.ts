import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const hashStorage: StateStorage = {
  getItem: (name) => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    const value = searchParams.get(name) ?? "";
    return JSON.parse(value);
  },
  setItem: (name, value) => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    searchParams.set(name, JSON.stringify(value));
    window.location.hash = searchParams.toString();
  },
  removeItem: (name) => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    searchParams.delete(name);
    window.location.hash = searchParams.toString();
  }
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'counter-store',
      storage: createJSONStorage(() => hashStorage)
    }
  )
)