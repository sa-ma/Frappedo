import { useState } from 'react';
import api from '../utils/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleAuthentication = async (username, password, navigation) => {
    setLoading(true);
    if (username === '' || password === '') {
      setLoading(false);
      setMessage('Username or Password Invalid');
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    try {
      await api.post('/api/method/login', {
        usr: username,
        pwd: password
      });
      setLoading(false);
      navigation.navigate('Dashboard');
      return;
    } catch (error) {
      setLoading(false);
      setMessage('Wrong username or Password');
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };
  return [loading, message, error, handleAuthentication];
};
