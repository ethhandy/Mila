import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GLOBAL_STORE, SIGNUP_STORE } from '../utils/constant';

interface GlobalStoreInterface {
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
}

interface SignupStoreInterface {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const globalStore = (set: any) => ({
  width: window.innerWidth,
  setWidth: (width: number) => set({ width }),

  height: window.innerHeight,
  setHeight: (height: number) => set({ height })
});

const signupStore = (set: any) => ({
  currentPage: 1,
  setCurrentPage: (currentPage: number) => set({ currentPage })
});

const persistedGlobalStore: any = persist(globalStore, { name: GLOBAL_STORE });
const persistedSignupStore: any = persist(signupStore, { name: SIGNUP_STORE });

export const useGlobalStore = create<GlobalStoreInterface>(persistedGlobalStore);
export const useSignupStore = create<SignupStoreInterface>(persistedSignupStore);
