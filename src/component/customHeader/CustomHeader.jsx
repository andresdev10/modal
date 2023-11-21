import React from 'react'
import svgIcon from '../../assets/Group1.svg'
const CustomHeader = () => (
    <div className='Head'>
    <img src={svgIcon} alt="" className='group1'/>
    <p className='text1'>ChatBot</p>
    <p className='eclipse'></p>
    <p className='text2'>online</p>
    <button className='logout'>Logout</button>
    </div>
)

export default CustomHeader