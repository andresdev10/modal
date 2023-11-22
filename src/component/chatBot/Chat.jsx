import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
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
  const [ticketNumber, setTicketNumber] = useState("1234567");


  
  const renderTicketNumber = () => `Your Ticket Number is #${ticketNumber}`;
  
  return (
    <div>
      <ThemeProvider theme={theme}>
         <ChatBot
           steps={StepsComponent({  renderTicketNumber  })} 
            // handleEnd={handleEnd}
            headerComponent={<CustomHeader />}
        />
      </ThemeProvider>
    </div>
  )
}

export default Chat