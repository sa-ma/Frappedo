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
