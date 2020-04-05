import React from 'react';
import { useAuthService } from 'app/services/Auth';
import { observer } from 'mobx-react-lite';

const LoginContainer: React.FC = observer(() => {
  const authService = useAuthService();
  const tryAction = async (fn: () => Promise<any>, defaultError: string) => {
    try {
      await fn();
    } catch (err) {
        console.error(err);
      }
    }
  tryAction(authService.login.bind(authService), 'There was an error logging in');
  return null
  })
  
export default LoginContainer;
