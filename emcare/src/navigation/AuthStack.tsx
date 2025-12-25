import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AuthStackParamList,
  ROLE_LABELS,
  ROUTES,
  USER_ROLES,
  UserRole,
} from './routes';

type AuthStackProps = {
  onSignIn: (role: UserRole) => void;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const RoleSelectScreen = ({ onSignIn }: AuthStackProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Welcome to EmCare</Text>
      <Text style={styles.subtitle}>
        Select a role to preview the placeholder navigation.
      </Text>
      <View style={styles.buttonGroup}>
        {USER_ROLES.map((role) => (
          <View key={role} style={styles.buttonRow}>
            <Button
              title={`Continue as ${ROLE_LABELS[role]}`}
              onPress={() => onSignIn(role)}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const AuthStack = ({ onSignIn }: AuthStackProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.auth.roleSelect}
        options={{ title: 'Sign in' }}
      >
        {() => <RoleSelectScreen onSignIn={onSignIn} />}
      </Stack.Screen>
    </Stack.Navigator>
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
  subtitle: {
    fontSize: tokens.fontSize.body,
    color: tokens.colors.muted,
    marginBottom: tokens.spacing.md,
  },
  buttonGroup: {
    marginTop: tokens.spacing.sm,
  },
  buttonRow: {
    marginBottom: tokens.spacing.sm,
  },
});

export default AuthStack;
