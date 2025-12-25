import { create } from 'zustand';

import type { AuthSlice } from './slices/authSlice';
import type { RoleSlice } from './slices/roleSlice';
import { createAuthSlice } from './slices/authSlice';
import { createRoleSlice } from './slices/roleSlice';

export type AppState = AuthSlice & RoleSlice;

export const useAppStore = create<AppState>()((...args) => ({
  ...createAuthSlice(...args),
  ...createRoleSlice(...args),
}));
