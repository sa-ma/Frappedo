import styled from 'styled-components';

export const primaryColor = '#219653';

export const Container = styled.View`
  background-color: #fff;
  display: flex;
  padding: 22px;
  align-items: flex-start;
  flex: 1;
`;

export const TextBox = styled.TextInput`
  padding: 10px;
  margin: 5px 0 10px;
  width: 300px;
  border-bottom-width: 2px;
  border-bottom-color: ${primaryColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
`;

export const Select = styled.View`
  margin: 10px 0;
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: ${primaryColor};
  background-color: #fff;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${primaryColor};
  padding: 15px;
  border-radius: 100px;
  margin-top: 22px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: ${primaryColor};
  margin-top: 60px;
  margin-bottom: 5px;
`;

export const ButtonImage = styled.Image``;

export const Form = styled.View`
  width: 100%;
`;

export const picker = {
  padding: 10,
  width: '100%',
  borderBottomwidth: 2,
  borderbottomcolor: primaryColor,
  backgroundColor: '#fff'
};

export const CalendarButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;
export const DateBox = styled.TextInput`
  padding: 10px;
  width: 300px;
  border-bottom-color: ${primaryColor};
  background-color: #fff;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  color: ${primaryColor};
`;

export const FormGroup = styled.View`
  width: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
  color: ${(props) => (props.color ? props.color : '#FFF')};
  flex: 1;
  justify-content: center;
  padding: 10px;
`;
