import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GLOBAL_STORE } from '../utils/constant';

const globalStore = (set) => ({
  width: window.innerWidth,
  setWidth: (width) => set({ width }),

  height: window.innerHeight,
  setHeight: (height) => set({ height })
});

const persistedGlobalStore = persist(globalStore, { name: GLOBAL_STORE });

const useGlobalStore = create(persistedGlobalStore);

export default useGlobalStore;
