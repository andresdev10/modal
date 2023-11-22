// StepsComponent.jsx
import React from 'react';

const StepsComponent = ({ setUserInput,setmountInput ,renderTicketNumber }) => {
  const steps = [
    {
      id: '1',
      message: 'Hello, Can you describe your issue?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Ok, insert your ticket code',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: '5',
    },
    {
      id: '5',
      message: 'insert bet amount',
      trigger: '6'
    },
    {
      id: '6',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: '7',
    },
    {
      id: '7',
      message: 'Ok give me a few minutes while I create your ticket with the number',
      trigger: '8'
    },
    {
      id: '8',
      message:  renderTicketNumber,
      end: true,
    },
  ];

  return steps;
};

export default StepsComponent;
