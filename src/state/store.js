import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GLOBAL_STORE, SIGNUP_STORE } from '../utils/constant';

const globalStore = (set) => ({
  width: window.innerWidth,
  setWidth: (width) => set({ width }),

  height: window.innerHeight,
  setHeight: (height) => set({ height })
});

const signupStore = (set) => ({
  currentPage: 1,
  setCurrentPage: (currentPage) => set({ currentPage })
});

export const useGlobalStore = create(persist(globalStore, { name: GLOBAL_STORE }));
export const useSignupStore = create(persist(signupStore, { name: SIGNUP_STORE }));
