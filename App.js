import {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {GlobalStyles} from './src/constants/styles';
import AuthContextProvider, {AuthContext} from './src/store/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingOverlay from './src/components/UI/LoadingOverlay';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        contentStyle: {backgroundColor: 'yellow'},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'red'}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
    </Tab.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, [authCtx]);

  if (isTryingLogin) {
    return <LoadingOverlay />;
  }
  return <Navigation />;
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator barStyle={{backgroundColor: 'red'}}>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Product" component={ProductScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
