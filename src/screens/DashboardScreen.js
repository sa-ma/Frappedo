import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import DateSwitcher from '../components/DateSwitcher';
import ListItem from '../components/ListItem';
import { primaryColor } from '../components/Styles';

const DashboardScreen = () => {
  const [date, setDate] = useState(moment());
  const [count, setCount] = useState(0);

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
      message: 'Read 10 books',
      complete: true
    }
  ];

  return (
    <Container>
      <User>Hello Samaila,</User>
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
        <ListItem complete={complete} message={message} />
      ))}

      <AddButton>
        <AddButtonImage source={require('../../assets/btn-add.png')} />
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

const User = styled.Text`
  font-size: 24px;
  color: ${primaryColor};
  margin-top: 60px;
  margin-bottom: 5px;
`;

const Notification = styled.Text`
  font-size: 16px;
  margin-bottom: 40px;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

const AddButtonImage = styled.Image``;

export default DashboardScreen;
