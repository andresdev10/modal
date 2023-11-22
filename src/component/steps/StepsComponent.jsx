// StepsComponent.jsx
import React from 'react';

const StepsComponent = ({  renderTicketNumber }) => {
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
      message: 'Ok give me a few minutes while I create your ticket ',
      trigger: '4',
    },
    {
      id: '4',
      message:  renderTicketNumber,
      end: true,
    },
  ];

  return steps;
};

export default StepsComponent;
