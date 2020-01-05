import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import DateSwitcher from '../components/DateSwitcher';
import ListItem from '../components/ListItem';
import { Title, ButtonImage } from '../components/Styles';
import api from '../utils/api';

const DashboardScreen = ({ navigation }) => {
  const [date, setDate] = useState(moment());
  const [count, setCount] = useState(0);

  const handleLogOut = async () => {
    try {
      const { status } = await api.get('/api/method/logout');
      if (status === 200) {
        navigation.navigate('loginFlow');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const mockData = [
    {
      message: 'Read 10 books',
      complete: true
    },
    {
      message: 'Walk 10km',
      complete: false
    },
    {
      message: 'Listen to a 10000 songs',
      complete: false
    },
    {
      message: 'Travel to another country',
      complete: true
    }
  ];

  return (
    <Container>
      <Title>Hello Samaila,</Title>
      <Notification> You have 10 pending tasks</Notification>
      <DateSwitcher
        date={date}
        addDay={() => {
          setCount(count + 1);
          setDate(date.add(1, 'd'));
        }}
        subtractDay={() => {
          setCount(count - 1);
          setDate(date.subtract(1, 'd'));
        }}
      />
      {mockData.map(({ message, complete }) => (
        <ListItem
          key={message}
          complete={complete}
          message={message}
          navigation={navigation}
        />
      ))}

      <LogOutButton onPress={() => handleLogOut()}>
        <ButtonImage source={require('../../assets/icon-log-out.png')} />
      </LogOutButton>

      <AddButton onPress={() => navigation.navigate('AddTask')}>
        <ButtonImage source={require('../../assets/btn-add.png')} />
      </AddButton>
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  display: flex;
  padding: 22px;
  align-items: flex-start;
  flex: 1;
`;

const Notification = styled.Text`
  font-size: 16px;
  margin-bottom: 40px;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const LogOutButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 100px;
`;

export default DashboardScreen;
