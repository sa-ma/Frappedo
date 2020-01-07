import React from 'react';
import styled from 'styled-components/native';
import { primaryColor } from './Styles';

const ListItem = ({ id, complete, message, navigation }) => {
  return (
    <Item onPress={() => navigation.navigate('UpdateTask', { id })}>
      <Dot backgroundColor={complete === 'Closed' ? primaryColor : 'red'}></Dot>
      <Message> {message}</Message>
    </Item>
  );
};

const Item = styled.TouchableOpacity`
  margin: 15px 0;
  padding: 19px;
  background-color: #ffffff;
  elevation: 4;
  shadow-offset: 4px 4px;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.backgroundColor};
  margin-right: 5px;
  border-radius: 50;
`;

const Message = styled.Text`
  font-size: 16px;
`;

export default ListItem;
