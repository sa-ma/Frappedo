import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ToastAndroid } from 'react-native';
import moment from 'moment';
import useTask from '../hooks/useTask';
import {
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
  Select,
  LoadingIcon
} from '../components/Styles';

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [pickDate, setPickDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [displayDate, setDisplayDate] = useState(
    moment(pickDate).format('YYYY-M-D')
  );
  const [loading, error, message, handleSubmit] = useTask();

  const setDate = (event, date) => {
    date = date || pickDate;
    setShowDate(Platform.OS === 'ios' ? true : false);
    setPickDate(date || pickDate);
    setDisplayDate(moment(date).format('YYYY-M-D'));
  };

  return (
    <Container>
      <Title>Add Task</Title>
      {error && ToastAndroid.show(message, ToastAndroid.SHORT)}
      <Form style={{ marginTop: 30 }}>
        <FormGroup>
          <LabelText>Title</LabelText>
          <TextBox
            placeholder="Title"
            style={{ width: '100%' }}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
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

        <ButtonContainer
          style={{ width: '100%' }}
          onPress={() => handleSubmit(title, displayDate, navigation)}
        >
          {loading ? (
            <LoadingIcon size="large" color="#fff" />
          ) : (
            <ButtonText>Add Task</ButtonText>
          )}
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddTaskScreen;
