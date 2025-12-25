import type { StateCreator } from 'zustand';

export type AuthSlice = {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  signIn: () => void;
  signOut: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
) => ({
  isAuthenticated: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  signIn: () => set({ isAuthenticated: true }),
  signOut: () => set({ isAuthenticated: false }),
});
