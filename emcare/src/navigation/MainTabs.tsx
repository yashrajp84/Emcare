import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  MainTabParamList,
  ROLE_LABELS,
  ROUTES,
  USER_ROLES,
  UserRole,
} from './routes';

type MainTabsProps = {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
  onSignOut: () => void;
};

type TabScreenConfig = {
  name: keyof MainTabParamList;
  title: string;
  description: string;
  kind?: 'account';
};

const tabsByRole = {
  mother: [
    {
      name: ROUTES.mother.home,
      title: 'Home',
      description: 'Your private space for daily reflections and check-ins.',
    },
    {
      name: ROUTES.mother.journal,
      title: 'Journal',
      description: 'Capture notes, voice entries, and personal context.',
    },
    {
      name: ROUTES.mother.share,
      title: 'Sharing',
      description: 'Choose what to share and how long access lasts.',
    },
    {
      name: ROUTES.mother.account,
      title: 'Account',
      description: 'Switch roles or sign out for the placeholder flow.',
      kind: 'account',
    },
  ],
  provider: [
    {
      name: ROUTES.provider.home,
      title: 'Overview',
      description: 'Read-only summaries and flagged trends appear here.',
    },
    {
      name: ROUTES.provider.insights,
      title: 'Insights',
      description: 'Quick scan of notable changes across recent weeks.',
    },
    {
      name: ROUTES.provider.timeline,
      title: 'Timeline',
      description: 'A concise view of shared moments and highlights.',
    },
    {
      name: ROUTES.provider.account,
      title: 'Account',
      description: 'Switch roles or sign out for the placeholder flow.',
      kind: 'account',
    },
  ],
  family: [
    {
      name: ROUTES.family.home,
      title: 'Wellbeing',
      description: 'Simple, supportive check-ins for loved ones.',
    },
    {
      name: ROUTES.family.support,
      title: 'Support',
      description: 'Ideas for encouragement and daily care.',
    },
    {
      name: ROUTES.family.updates,
      title: 'Updates',
      description: 'Short, friendly notes shared by the mother.',
    },
    {
      name: ROUTES.family.account,
      title: 'Account',
      description: 'Switch roles or sign out for the placeholder flow.',
      kind: 'account',
    },
  ],
} satisfies Record<UserRole, TabScreenConfig[]>;

const Tab = createBottomTabNavigator<MainTabParamList>();

const PlaceholderScreen = ({
  title,
  role,
  description,
}: {
  title: string;
  role: UserRole;
  description: string;
}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.role}>{`Role: ${ROLE_LABELS[role]}`}</Text>
      <Text style={styles.body}>{description}</Text>
    </SafeAreaView>
  );
};

const RoleToolsScreen = ({
  role,
  onRoleChange,
  onSignOut,
}: {
  role: UserRole;
  onRoleChange: (nextRole: UserRole) => void;
  onSignOut: () => void;
}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.role}>{`Signed in as ${ROLE_LABELS[role]}`}</Text>
      <Text style={styles.body}>
        Use the controls below to preview the other role views.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Switch role</Text>
        {USER_ROLES.map((nextRole) => (
          <View key={nextRole} style={styles.buttonRow}>
            <Button
              title={ROLE_LABELS[nextRole]}
              disabled={nextRole === role}
              onPress={() => onRoleChange(nextRole)}
            />
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Button title="Sign out" onPress={onSignOut} />
      </View>
    </SafeAreaView>
  );
};

const MainTabs = ({ role, onRoleChange, onSignOut }: MainTabsProps) => {
  const screens = tabsByRole[role];

  return (
    <Tab.Navigator key={role} screenOptions={{ headerTitleAlign: 'left' }}>
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          options={{ title: screen.title }}
        >
          {() =>
            screen.kind === 'account' ? (
              <RoleToolsScreen
                role={role}
                onRoleChange={onRoleChange}
                onSignOut={onSignOut}
              />
            ) : (
              <PlaceholderScreen
                title={screen.title}
                role={role}
                description={screen.description}
              />
            )
          }
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

const tokens = {
  colors: {
    background: '#ffffff',
    text: '#111111',
    muted: '#4b5563',
  },
  fontSize: {
    title: 20,
    body: 16,
  },
  spacing: {
    sm: 8,
    md: 16,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.colors.background,
    padding: tokens.spacing.md,
  },
  title: {
    fontSize: tokens.fontSize.title,
    color: tokens.colors.text,
    marginBottom: tokens.spacing.sm,
  },
  role: {
    fontSize: tokens.fontSize.body,
    color: tokens.colors.muted,
    marginBottom: tokens.spacing.sm,
  },
  body: {
    fontSize: tokens.fontSize.body,
    color: tokens.colors.text,
  },
  section: {
    marginTop: tokens.spacing.md,
  },
  sectionTitle: {
    fontSize: tokens.fontSize.body,
    color: tokens.colors.text,
    marginBottom: tokens.spacing.sm,
  },
  buttonRow: {
    marginBottom: tokens.spacing.sm,
  },
});

export default MainTabs;
