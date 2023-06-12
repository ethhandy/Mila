import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GLOBAL_STORE, SIGNUP_STORE, AUTH_STORE } from '../utils/constant';

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

interface AuthStoreInterface {
  isAuthenicated: boolean;
  setAuthenication: (isAuthenicated: boolean) => void;
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

const authStore = (set: any) => ({
  isAuthenicated: false,
  setAuthenication: (isAuthenicated: boolean) => set({ isAuthenicated })
});

const persistedGlobalStore: any = persist(globalStore, { name: GLOBAL_STORE });
const persistedSignupStore: any = persist(signupStore, { name: SIGNUP_STORE });
const persistedAuthStore: any = persist(authStore, { name: AUTH_STORE });

export const useGlobalStore = create<GlobalStoreInterface>(persistedGlobalStore);
export const useSignupStore = create<SignupStoreInterface>(persistedSignupStore);
export const useAuthStore = create<AuthStoreInterface>(persistedAuthStore);
