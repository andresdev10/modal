import React from 'react'
import './ModalCss.css'
import svgButtom from '../../assets/Vector.svg'
import svgIcon from '../../assets/Group1.svg'
const Modal = () => {
  return (

      <div className='container1'>
        <div className='container2'>
          <div className='group1'>
            <img src={svgIcon} alt="" />
          </div>
          
            <p className='text1'>ChatBot</p>
            <p className='eclipse'></p>
            <p className='text2'>online</p>
            <button className='logout'>Logout</button>
        </div> 
        <div className='container3'>
          <div className='containerChat1'>
            <ul>
              <li style={{textDecoration:'none'}}>
                <img src={svgIcon} alt="icon" className='iconChat1'/>
                <p className='chat1'>Hi,how can i help you?</p>
              </li>
            </ul>
          </div>
          <div className='containerChat2'>
            <ul>
              <li>
                <p className='chat2'>How are you?</p>
              </li>
            </ul>
          </div>
          </div> 
          <div className='lineSeparator'></div>
        <div className='container4'>
          <input type="text" placeholder='Ask your question...'  className='textBootom'/>
          {/* <p className='textBootom'>Ask your question...</p> */}
          <img src={svgButtom} alt="icon" className='buttomBootom'/>
        </div> 
      </div>
        

  )
}

export default Modal