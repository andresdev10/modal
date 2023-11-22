import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import './Chat.css'
import CustomHeader from '../customHeader/CustomHeader';
import StepsComponent from '../steps/StepsComponent';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#CE5151',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ACACAC',
  botFontColor: 'black',
  userBubbleColor: '#7914d7',
  userFontColor: '#fff',
};
const Chat = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [userInput, setUserInput] = useState("");
  const [mountInput, setmountInput] = useState("");


  const handleEnd = ({ steps }) => {
    steps.forEach((step) => {
      if (step.id === '4') {
        setUserInput(step.value)
      }
      if (step.id === '6') {
        setmountInput(step.value)
      }
    });
  };
 
  
  
  const renderTicketNumber = () => `Your Ticket Number is #${userInput}`;
  console.log(userInput)
  console.log(mountInput)
  return (
    <div>
      <ThemeProvider theme={theme}>

         <ChatBot
           steps={StepsComponent({ setUserInput, renderTicketNumber, setmountInput  })} 
            handleEnd={handleEnd}
            headerComponent={<CustomHeader />}
        />
      </ThemeProvider>
    </div>
  )
}

export default Chat