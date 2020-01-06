import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from 'react-native';
import moment from 'moment';

import {
  picker,
  Form,
  FormGroup,
  CalendarButtonContainer,
  DateBox,
  LabelText,
  Container,
  Title,
  TextBox,
  ButtonContainer,
  ButtonText,
  ButtonImage,
  Select
} from '../components/Styles';

const UpdateTaskScreen = () => {
  const [status, setStatus] = useState('pending');
  const [pickDate, setPickDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [displayDate, setDisplayDate] = useState(
    moment(pickDate).format('D-M-YYYY')
  );
  const setDate = (event, date) => {
    date = date || pickDate;
    setShowDate(Platform.OS === 'ios' ? true : false);
    setPickDate(date || pickDate);
    setDisplayDate(moment(date).format('D-M-YYYY'));
  };

  return (
    <Container>
      <Title>Update Task</Title>

      <Form style={{ marginTop: 30 }}>
        <FormGroup style={{ marginTop: 13 }}>
          <LabelText>Title</LabelText>
          <TextBox placeholder="Title" style={{ width: '100%' }} />
        </FormGroup>

        <FormGroup>
          <LabelText>Due Date</LabelText>
          <Select
            style={{ width: '100%', display: 'flex', flexDirection: 'row' }}
          >
            <DateBox
              placeholder="Due Date"
              value={displayDate}
              editable={false}
            />
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
        </FormGroup>

        <FormGroup>
          <LabelText>Status</LabelText>
          <Select>
            <Picker
              selectededValue={status}
              style={picker}
              mode="dropdown"
              onValueChange={(value) => setStatus(value)}
            >
              <Picker.Item label="Pending" value="pending" />
              <Picker.Item label="Completed" value="completed" />
            </Picker>
          </Select>
        </FormGroup>

        <ButtonContainer
          style={{ width: '100%' }}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <ButtonText>Update Task</ButtonText>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default UpdateTaskScreen;
