import React, { useState } from 'react';
import useList from '../hooks/useList';
import { ScrollView } from 'react-native';
import moment from 'moment';
import styled from 'styled-components';
import DateSwitcher from '../components/DateSwitcher';
import ListItem from '../components/ListItem';
import {
  primaryColor,
  Title,
  ButtonImage,
  LoadingIcon
} from '../components/Styles';
import { handleLogOut } from '../utils/helpers';

const DashboardScreen = ({ navigation }) => {
  const [date, setDate] = useState(moment());
  const [count, setCount] = useState(0);
  const [loading, user, tasks] = useList(navigation, count, date);

  return loading ? (
    <LoadingContainer>
      <LoadingIcon size="large" color={primaryColor} />
    </LoadingContainer>
  ) : (
    <ScrollView contentContainerStyle={scrollStyle}>
      <Container>
        <Title>Hello {user || null},</Title>
        <Notification>
          You have {tasks.filter((item) => item.status === 'Open').length}{' '}
          pending tasks
        </Notification>
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

        {tasks.length > 0 &&
          tasks.map(({ name, description, status }) => (
            <ListItem
              key={name}
              id={name}
              complete={status}
              message={description}
              navigation={navigation}
            />
          ))}

        <LogOutButton onPress={() => handleLogOut(navigation)}>
          <ButtonImage source={require('../../assets/icon-log-out.png')} />
        </LogOutButton>

        <AddButton onPress={() => navigation.navigate('AddTask')}>
          <ButtonImage source={require('../../assets/btn-add.png')} />
        </AddButton>
      </Container>
    </ScrollView>
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
  z-index: 15;
  elevation: ${Platform.OS === 'android' ? 50 : 0};
`;

const LogOutButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 100px;
  z-index: 15;
  elevation: ${Platform.OS === 'android' ? 50 : 0};
`;

const LoadingContainer = styled.View`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const scrollStyle = {
  height: '100%'
};

export default DashboardScreen;
