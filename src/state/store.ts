import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GLOBAL_STORE, SIGNUP_STORE } from '../utils/constant';

interface GlobalStoreInterface {
  width: Number;
  setWidth: (width: Number) => void;
  height: Number;
  setHeight: (height: Number) => void;
}

interface SignupStoreInterface {
  currentPage: Number;
  setCurrentPage: (currentPage: Number) => void;
}

const globalStore = (set: any) => ({
  width: window.innerWidth,
  setWidth: (width: Number) => set({ width }),

  height: window.innerHeight,
  setHeight: (height: Number) => set({ height })
});

const signupStore = (set: any) => ({
  currentPage: 1,
  setCurrentPage: (currentPage: Number) => set({ currentPage })
});

const persistedGlobalStore: any = persist(globalStore, { name: GLOBAL_STORE });
const persistedSignupStore: any = persist(signupStore, { name: SIGNUP_STORE });

export const useGlobalStore = create<GlobalStoreInterface>(persistedGlobalStore);
export const useSignupStore = create<SignupStoreInterface>(persistedSignupStore);
