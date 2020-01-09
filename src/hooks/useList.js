import { useEffect, useState } from 'react';
import api from '../utils/api';
import moment from 'moment';

export default (navigation, count, date) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState('');
  const loadData = async (theDate) => {
    setLoading(true);
    const formattedDate = moment(theDate).format('YYYY-M-D');
    try {
      const getUser = await api.get('/api/method/get_logged_user');
      setUser(getUser.data.message.split(' ')[0]);
      const response = await api.get(
        `/api/resource/ToDo?fields=["name", "description", "date", "status"]&&filters=[["date","=","${formattedDate}"]]`
      );
      const { data } = response.data;
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(date);
    const didFocusSubscription = navigation.addListener('didFocus', () =>
      loadData(date)
    );

    return () => didFocusSubscription.remove();
  }, [count, date]);

  return [loading, user, tasks];
};
