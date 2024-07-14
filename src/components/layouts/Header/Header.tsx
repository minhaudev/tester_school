"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/assets/images/LUNA.png"
import bell from "@/assets/images/bell.svg"
import user from "@/assets/images/user.svg"
import crow_down from "@/assets/images/crow_down.svg"
import OrderNotice from '@/components/atoms/OrderNotice/OrderNotice'
import {dataOrderNotice}  from "@/faker/OrderNotice"
export default function Header() {
  const [language, setLanguage] = useState<string>('ENG');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isNotice,setIsNotice] = useState<boolean>(false)
const handleLanguage = () => {
  setLanguage((prevLanguage) => (prevLanguage === "ENG" ? "VI" : "ENG"));
  setIsClicked(true);
  setTimeout(() => setIsClicked(false), 300); 
  }
  const handleNotice = () => {
    setIsNotice(!isNotice)
  }
  return (<>
    <div className=''>
     
    <div className='h-14 w-full bg-white flex justify-between item-center px-6 border-b border-stroke'>
      <div className='flex items-center justify-center'>
        <Image src={logo} alt=''/>
      </div>
      <div className='flex gap-[16px] justify-center items-center'>
      
        <div className='relative'>
          <span className='absolute rounded-full ml-3  px-[4px] text-[8px] text-white bg-warning'>2</span>
            <Image onClick={handleNotice} className='cursor-pointer' src={bell} alt='' />
            {isNotice && <OrderNotice dataNotice={dataOrderNotice } />}
          </div>
       
          <p className={`cursor-pointer transition duration-300 ease-in-out transform ${
      isClicked ? 'ease-in-out transform' : ''
    }`}onClick={handleLanguage}>{language}</p>
          <div className='h-[32px] w-[1px] bg-stroke'></div>
          <div className='flex gap-[9px]'>
            <Image src={user} alt='' />
            <div>
              <p className='text-text text-[13px] leading-4'>Nguyễn Văn A</p>

              <p className='text-unit text-[12px]'>Chuyên viên kinh doanh</p>
            </div>
            <div>
              <Image className='cursor-pointer' src={crow_down} alt=''/>
            </div>
 
        </div>

      </div>
    </div>
  


  </div>
  
  </>
  
  )
}
