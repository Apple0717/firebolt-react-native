import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingHome from '../screens/Onboarding/OnBoardingHome';
import CreateWallet from '../screens/Onboarding/CreateWallet';
import { SCREEN_NAMES } from './screenNames';
import ConfirmSeed from '../screens/Onboarding/ConfirmSeed';
import PinSetup from '../screens/Onboarding/PinSetup';
import ConfirmPin from '../screens/Onboarding/ConfirmPin';
import Dashboard from '../screens/Home/Dashboard';
import { useConnectionContext } from '../providers/ConnectionProvider';
import { Splash } from '../components/Splash';
import VerifyPin from '../screens/Home/VerifyPin';
import ZKPoolEnter from '../screens/ZKPool/ZKPoolEnter';  // New screen for ZK pool entry
import ZKPoolExit from '../screens/ZKPool/ZKPoolExit';    // New screen for ZK pool exit

export type RootStackParamList = {
  OnboardingHome: undefined;
  CreateWallet: undefined;
  ConfirmSeed: { words: string[] };
  PinSetup: { words: string[] };
  ConfirmPin: { words: string[]; walletPin: number[] };
  Dashboard: undefined;
  VerifyPin: undefined;
  ZKPoolEnter: undefined;  // New route for entering ZK pool
  ZKPoolExit: undefined;   // New route for exiting ZK pool
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function OnBoardingNavigation() {
  const { loading, isWalletConnected } = useConnectionContext();
  
  if (loading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator>
      {isWalletConnected ? (
        <Stack.Group>
          {/* Verify Pin and Dashboard for authenticated users */}
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.VerifyPin}
            component={VerifyPin}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.Dashboard}
            component={Dashboard}
          />
          
          {/* ZK Pool Entry and Exit Screens */}
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ZKPoolEnter}
            component={ZKPoolEnter}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ZKPoolExit}
            component={ZKPoolExit}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          {/* Onboarding screens for users without a wallet */}
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.OnboardingHome}
            component={OnBoardingHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.CreateWallet}
            component={CreateWallet}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ConfirmSeed}
            component={ConfirmSeed}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.PinSetup}
            component={PinSetup}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ConfirmPin}
            component={ConfirmPin}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.Dashboard}
            component={Dashboard}
          />

          {/* ZK Pool Entry and Exit Screens for users without a wallet */}
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ZKPoolEnter}
            component={ZKPoolEnter}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREEN_NAMES.ZKPoolExit}
            component={ZKPoolExit}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default OnBoardingNavigation;