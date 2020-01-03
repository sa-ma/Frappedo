import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ButtonContainer,
  ButtonText,
  Form,
  primaryColor
} from '../components/Styles';

const AuthenticationScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(true);

  return (
    <Container>
      <Logo source={require('../../assets/Frappedo.png')} />
      <Form>
        <TextBox
          placeholder="Username"
          backgroundColor={focus ? '#d5f6e3' : '#fff'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <TextBox
          placeholder="Password"
          backgroundColor={!focus ? '#d5f6e3' : '#fff'}
          onFocus={() => setFocus(false)}
          onBlur={() => setFocus(true)}
        />
        <ButtonContainer onPress={() => navigation.navigate('Dashboard')}>
          <ButtonText>Sign In</ButtonText>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export const Container = styled.View`
  background-color: #fff;
  display: flex;
  padding: 22px;
  align-items: center;
  flex: 1;
`;

const Logo = styled.Image`
  margin-top: 168px;
  margin-bottom: 100px;
`;

export const TextBox = styled.TextInput`
  padding: 10px;
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: ${primaryColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
`;

export default AuthenticationScreen;
