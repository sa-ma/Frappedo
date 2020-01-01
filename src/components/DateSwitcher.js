import React from 'react';
import styled from 'styled-components';

const DateSwitcher = ({ date, addDay, subtractDay }) => {
  const month = date.format('MMM');
  const day = date.format('ddd');
  const year = date.format('YYYY');
  const theDate = date.format('D');
  return (
    <Main>
      <DateContainer>
        <BigText>{theDate}</BigText>
        <MonthDayGroup>
          <SmallText>{month}</SmallText>
          <SmallText>{day}</SmallText>
        </MonthDayGroup>
        <BigText>{year}</BigText>
      </DateContainer>
      <ButtonGroup>
        <ButtonContainer
          style={{ marginRight: 13 }}
          onPress={() => subtractDay()}
        >
          <ButtonImage source={require('../../assets/btn-left.png')} />
        </ButtonContainer>

        <ButtonContainer onPress={() => addDay()}>
          <ButtonImage source={require('../../assets/btn-right.png')} />
        </ButtonContainer>
      </ButtonGroup>
    </Main>
  );
};

const dateColor = '#27AE60';

const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const BigText = styled.Text`
  font-size: 24px;
  color: ${dateColor};
`;

const MonthDayGroup = styled.View`
  display: flex;
  margin: 0 5px;
`;
const SmallText = styled.Text`
  font-size: 12px;
  color: ${dateColor};
`;

const ButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  margin-left: 150px;
`;

const ButtonContainer = styled.TouchableOpacity`
  padding: 5px;
`;
const ButtonImage = styled.Image``;

export default DateSwitcher;
