import React, { useState } from 'react';
import styled from 'styled-components';
import { inputStyles } from './styles';

import { format } from 'date-fns';
import Calendar from 'components/edit/Calender';

interface DateInputProps {
  id: string;
  onChange: Function;
  placeholder: string;
  selectedDate?: Date;
}

const filterInvaildDate = (selectedDate?: Date) =>
  !selectedDate ? undefined : format(selectedDate, 'yyyy.MM.dd');

const DateInput = ({
  id,
  placeholder,
  selectedDate,
  onChange,
}: DateInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancle = () => setIsOpen(false);

  const handleConfirm = (newSelectedDate: Date) => {
    onChange(newSelectedDate);
    setIsOpen(false);
  };

  return (
    <Container>
      <Input
        id={id}
        type="button"
        value={filterInvaildDate(selectedDate) || placeholder}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />

      {isOpen && (
        <Wrapper>
          <Calendar
            onConfirm={handleConfirm}
            onCancle={handleCancle}
            selectedDate={selectedDate}
          />
        </Wrapper>
      )}
    </Container>
  );
};
export default DateInput;

const Container = styled.div`
  position: relative;
`;
const Input = styled.input`
  ${inputStyles}
  color: ${({ theme }) => theme.color.lightgrey};
  background-color: ${({ theme }) => theme.color.white};
  width: 80%;
  height: 50px;
  cursor: pointer;
  :hover {
    border-color: ${({ theme }) => theme.color.grey};
  }
`;
const Wrapper = styled.div`
  position: absolute;
  bottom: 110%;
  left: 0;
`;
