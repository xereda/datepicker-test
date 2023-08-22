import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import ClientOnly from '../ClientOnly/ClientOnly';

export default function Datepicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  console.log({ startDate, endDate });

  return (
    <ClientOnly>
      <DateRangePicker
        noBorder
        minimumNights={0}
        startDate={startDate}
        startDateId="start-date-id"
        endDate={endDate}
        endDateId="end-date-id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        withPortal={true}
        customInputIcon=""
        hideKeyboardShortcutsPanel={true}
      />
    </ClientOnly>
  );
}
