import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components';
import { Picker } from 'native-base';
import moment from 'moment';

import {
  primaryColor,
  Container,
  Title,
  TextBox,
  ButtonContainer,
  ButtonText,
  ButtonImage,
  Select
} from '../components/Styles';

const AddTaskScreen = () => {
  const [status, setStatus] = useState('pending');
  const [pickDate, setPickDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [displayDate, setDisplayDate] = useState(
    moment(pickDate).format('D-M-YYYY')
  );
  console.log(pickDate);
  const setDate = (event, date) => {
    date = date || pickDate;
    setShowDate(Platform.OS === 'ios' ? true : false);
    setPickDate(date || pickDate);
    setDisplayDate(moment(date).format('D-M-YYYY'));
  };

  return (
    <Container>
      <Title>Add Task</Title>
      <TextBox placeholder="Title" style={{ width: '100%' }} />
      <Select style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <DateBox placeholder="Due Date" value={displayDate} editable={false} />
        {showDate && (
          <DateTimePicker
            mode="date"
            value={pickDate}
            onChange={setDate}
            display="default"
          />
        )}

        <CalendarButtonContainer
          style={{ width: '80%' }}
          onPress={() => setShowDate(true)}
        >
          <ButtonImage source={require('../../assets/icon-calendar.png')} />
        </CalendarButtonContainer>
      </Select>
      <Select>
        <Picker
          selectededValue={status}
          placeholder="Due Date"
          style={picker}
          mode="dropdown"
          onValueChange={(value) => setStatus(value)}
        >
          <Picker.Item label="Pending" value="pending" />
          <Picker.Item label="Completed" value="completed" />
        </Picker>
      </Select>
      <TextBox
        placeholder="Description"
        style={{ width: '100%' }}
        textAlignVertical={'top'}
        multiline
        numberOfLines={6}
      />
      <ButtonContainer
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <ButtonText>Add Task</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

const picker = {
  padding: 10,
  margin: 10,
  width: '100%',
  borderBottomwidth: 2,
  borderbottomcolor: primaryColor,
  backgroundColor: '#fff'
};

const CalendarButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;
const DateBox = styled.TextInput`
  padding: 10px;
  width: 300px;
  border-bottom-color: ${primaryColor};
  background-color: #fff;
`;

export default AddTaskScreen;
