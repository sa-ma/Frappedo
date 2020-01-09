import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastAndroid } from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  Form,
  FormGroup,
  primaryColor,
  LoadingIcon
} from '../components/Styles';
import useAuthentication from '../hooks/useAuthentication';

const AuthenticationScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, message, error, handleAuthentication] = useAuthentication();

  return (
    <Container>
      <Logo source={require('../../assets/Frappedo.png')} />
      {error && ToastAndroid.show(message, ToastAndroid.SHORT)}
      <Form>
        <FormGroup>
          <TextBox
            placeholder="Username"
            backgroundColor={focus ? '#d5f6e3' : '#fff'}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={username}
            onChangeText={(user) => setUsername(user)}
            autoCorrect={false}
            autoFocus
            spellCheck={false}
            textContentType="username"
          />
        </FormGroup>

        <FormGroup>
          <TextBox
            placeholder="Password"
            backgroundColor={!focus ? '#d5f6e3' : '#fff'}
            onFocus={() => setFocus(false)}
            onBlur={() => setFocus(true)}
            value={password}
            onChangeText={(userpassword) => setPassword(userpassword)}
            autoCorrect={false}
            spellCheck={false}
            textContentType="password"
            secureTextEntry
          />
        </FormGroup>

        <ButtonContainer
          onPress={() => handleAuthentication(username, password, navigation)}
        >
          {loading ? (
            <LoadingIcon size="large" color="#fff" />
          ) : (
            <ButtonText>Sign In</ButtonText>
          )}
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  display: flex;
  padding: 22px;
  flex: 1;
  width: 100%;
  align-items: center;
`;

const Logo = styled.Image`
  margin-top: 168px;
  margin-bottom: 100px;
`;

export const TextBox = styled.TextInput`
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border-bottom-width: 2px;
  border-bottom-color: ${primaryColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
`;

export default AuthenticationScreen;
