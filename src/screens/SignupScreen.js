import {useState, useContext} from 'react';
import AuthContent from '../components/Auth/AuthContent';
import {createUser} from '../utils/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Could not sign up. Please check your credentials.');
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user" />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
