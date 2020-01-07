import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from 'react-native';
import { ToastAndroid } from 'react-native';
import moment from 'moment';
import api from '../utils/api';

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
  Select,
  LoadingIcon
} from '../components/Styles';

const AddTaskScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Open');
  const [pickDate, setPickDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [displayDate, setDisplayDate] = useState(
    moment(pickDate).format('YYYY-M-D')
  );
  const [result, setResult] = useState();

  const id = navigation.getParam('id');
  const setDate = (event, date) => {
    date = date || pickDate;
    setShowDate(Platform.OS === 'ios' ? true : false);
    setPickDate(date || pickDate);
    setDisplayDate(moment(date).format('YYYY-M-D'));
  };

  const handleUpdate = async () => {
    setLoading(true);
    if (title === '' || displayDate === '' || status === '') {
      setLoading(false);
      setMessage('Cannot submit empty fields');
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    try {
      await api.put(`/api/resource/ToDo/${id}`, {
        description: title,
        date: displayDate,
        status: status
      });
      setLoading(false);
      navigation.navigate('Dashboard');
      return;
    } catch (error) {
      setLoading(false);
      setMessage('Error Updating Task');
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/api/resource/ToDo/${id}`);
      setLoading(false);
      navigation.navigate('Dashboard');
      return;
    } catch (error) {
      setLoading(false);
      setMessage('Error Deleting Task');
      console.log(error);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/api/resource/ToDo/${id}`);
      const { description, date, status } = data.data;
      setTitle(description);
      setDisplayDate(date);
      setStatus(status);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage('Error Submitting Task');
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <Title>Update Task</Title>
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

        <FormGroup>
          <LabelText>Status</LabelText>
          <Select>
            <Picker
              selectedValue={status}
              style={picker}
              mode="dropdown"
              onValueChange={(value) => setStatus(value)}
            >
              <Picker.Item label="Pending" value="Open" />
              <Picker.Item label="Completed" value="Closed" />
            </Picker>
          </Select>
        </FormGroup>

        <ButtonContainer
          style={{ width: '100%' }}
          onPress={() => handleUpdate()}
        >
          {loading ? (
            <LoadingIcon size="large" color="#fff" />
          ) : (
            <ButtonText>Update Task</ButtonText>
          )}
        </ButtonContainer>

        <ButtonContainer
          color = "#eb5757"
          style={{ width: '100%' }}
          onPress={() => handleDelete()}
        >
          {loading ? (
            <LoadingIcon size="large" color="#fff" />
          ) : (
            <ButtonText>Delete Task</ButtonText>
          )}
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddTaskScreen;
