import React, { MouseEventHandler, useState } from 'react';

import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';

import 'react-day-picker/dist/style.css';
import Button from 'components/button/Button';

interface CalendarProps {
  onConfirm: Function;
  onCancle: MouseEventHandler<HTMLButtonElement>;
  selectedDate?: Date;
}

const Calendar = ({ onConfirm, onCancle, selectedDate }: CalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  return (
    <Container>
      <DayPicker mode="single" selected={date} onSelect={setDate} />
      <ButtonWrapper>
        <Button
          onClick={onCancle}
          width="60px"
          bgColor="lightgrey"
          textColor="black"
        >
          취소
        </Button>
        <Button onClick={() => onConfirm(date)} width="60px">
          확인
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  padding-bottom: 10px;
  border-radius: 12px;
  color: ${({ theme }) => theme.color.bg_dark};
  background-color: ${({ theme }) => theme.color.white};

  --rdp-cell-size: 30px;
  --rdp-background-color: ${({ theme }) => theme.color.lightgrey};
  --rdp-outline-selected: none;
  font-family: Poppins;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 32px;
  margin-top: 10px;
`;
