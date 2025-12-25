import type { StateCreator } from 'zustand';

import type { UserRole } from '../../navigation/routes';

export type RawJournalAccess = 'none' | 'full';
export type AiTagsAccess = 'none' | 'summary' | 'edit';
export type WeeklySummaryAccess =
  | 'none'
  | 'summary'
  | 'edit'
  | 'autoFlagged'
  | 'simplified';
export type SharingControlsAccess = 'none' | 'full';
export type MessagingAccess = 'none' | 'optIn' | 'secure';
export type ClinicalNotesAccess = 'none' | 'full';
export type AuditLogsAccess = 'none' | 'full';

export type Capabilities = {
  rawJournalEntries: RawJournalAccess;
  aiTags: AiTagsAccess;
  weeklySummary: WeeklySummaryAccess;
  sharingControls: SharingControlsAccess;
  messaging: MessagingAccess;
  clinicalNotes: ClinicalNotesAccess;
  auditLogs: AuditLogsAccess;
};

const DEFAULT_ROLE: UserRole = 'mother';

// Mirrors the canonical access matrix from docs/CODEX_CONTEXT_EMCARE.md.
const CAPABILITIES_BY_ROLE: Record<UserRole, Capabilities> = {
  mother: {
    rawJournalEntries: 'full',
    aiTags: 'edit',
    weeklySummary: 'edit',
    sharingControls: 'full',
    messaging: 'optIn',
    clinicalNotes: 'none',
    auditLogs: 'none',
  },
  provider: {
    rawJournalEntries: 'none',
    aiTags: 'summary',
    weeklySummary: 'autoFlagged',
    sharingControls: 'none',
    messaging: 'secure',
    clinicalNotes: 'full',
    auditLogs: 'none',
  },
  family: {
    rawJournalEntries: 'none',
    aiTags: 'none',
    weeklySummary: 'simplified',
    sharingControls: 'none',
    messaging: 'none',
    clinicalNotes: 'none',
    auditLogs: 'none',
  },
};

export const getCapabilitiesForRole = (role: UserRole): Capabilities => ({
  ...CAPABILITIES_BY_ROLE[role],
});

export type RoleSlice = {
  role: UserRole;
  capabilities: Capabilities;
  setRole: (role: UserRole) => void;
  setCapabilities: (capabilities: Capabilities) => void;
  resetRole: () => void;
};

export const createRoleSlice: StateCreator<RoleSlice, [], [], RoleSlice> = (
  set,
) => ({
  role: DEFAULT_ROLE,
  capabilities: getCapabilitiesForRole(DEFAULT_ROLE),
  setRole: (role) =>
    set({
      role,
      capabilities: getCapabilitiesForRole(role),
    }),
  setCapabilities: (capabilities) => set({ capabilities }),
  resetRole: () =>
    set({
      role: DEFAULT_ROLE,
      capabilities: getCapabilitiesForRole(DEFAULT_ROLE),
    }),
});
