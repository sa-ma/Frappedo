import moment from 'moment';
import api from './api';

export const handleLogOut = async (direction) => {
  try {
    const { status } = await api.get('/api/method/logout');
    if (status === 200) {
      direction.navigate('loginFlow');
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadData = async (theDate, setLoading, setTasks, setUser) => {
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
