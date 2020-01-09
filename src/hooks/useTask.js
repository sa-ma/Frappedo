import { useState } from 'react';
import api from '../utils/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (title, date, navigation) => {
    setLoading(true);
    if (title === '' || date === '') {
      setLoading(false);
      setMessage('Cannot submit empty fields');
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    try {
      await api.post('/api/resource/ToDo', {
        description: title,
        date: date,
        status: 'Open'
      });
      setLoading(false);
      navigation.navigate('Dashboard');
      return;
    } catch (error) {
      setLoading(false);
      setMessage('Error Submitting Task');
      console.log(error);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return [loading, error, message, handleSubmit];
};
