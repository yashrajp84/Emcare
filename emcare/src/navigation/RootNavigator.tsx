import React, { useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import { ROUTES, RootStackParamList, UserRole } from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [role, setRole] = useState<UserRole>('mother');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = useCallback((nextRole: UserRole) => {
    setRole(nextRole);
    setIsSignedIn(true);
  }, []);

  const handleSignOut = useCallback(() => {
    setIsSignedIn(false);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <Stack.Screen name={ROUTES.root.main}>
              {() => (
                <MainTabs
                  role={role}
                  onRoleChange={setRole}
                  onSignOut={handleSignOut}
                />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name={ROUTES.root.auth}>
              {() => <AuthStack onSignIn={handleSignIn} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
