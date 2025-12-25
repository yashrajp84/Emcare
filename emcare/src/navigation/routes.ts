export type UserRole = 'mother' | 'provider' | 'family';

export const USER_ROLES: UserRole[] = ['mother', 'provider', 'family'];

export const ROLE_LABELS: Record<UserRole, string> = {
  mother: 'Mother',
  provider: 'Provider',
  family: 'Family',
};

export const ROUTES = {
  root: {
    auth: 'AuthStack',
    main: 'MainTabs',
  },
  auth: {
    roleSelect: 'RoleSelect',
  },
  mother: {
    home: 'MotherHome',
    journal: 'MotherJournal',
    share: 'MotherShare',
    account: 'MotherAccount',
  },
  provider: {
    home: 'ProviderHome',
    insights: 'ProviderInsights',
    timeline: 'ProviderTimeline',
    account: 'ProviderAccount',
  },
  family: {
    home: 'FamilyHome',
    support: 'FamilySupport',
    updates: 'FamilyUpdates',
    account: 'FamilyAccount',
  },
} as const;

export type RootStackParamList = {
  [ROUTES.root.auth]: undefined;
  [ROUTES.root.main]: undefined;
};

export type AuthStackParamList = {
  [ROUTES.auth.roleSelect]: undefined;
};

export type MotherTabParamList = {
  [ROUTES.mother.home]: undefined;
  [ROUTES.mother.journal]: undefined;
  [ROUTES.mother.share]: undefined;
  [ROUTES.mother.account]: undefined;
};

export type ProviderTabParamList = {
  [ROUTES.provider.home]: undefined;
  [ROUTES.provider.insights]: undefined;
  [ROUTES.provider.timeline]: undefined;
  [ROUTES.provider.account]: undefined;
};

export type FamilyTabParamList = {
  [ROUTES.family.home]: undefined;
  [ROUTES.family.support]: undefined;
  [ROUTES.family.updates]: undefined;
  [ROUTES.family.account]: undefined;
};

export type MainTabParamList = MotherTabParamList &
  ProviderTabParamList &
  FamilyTabParamList;
