import React from 'react'
import Button from '../Button/Button';

interface Notice {
  noticeString: string;
  time: string;
}

interface PropsOrderNotice {
  dataNotice: Notice[];
}
export default function OrderNotice(props:PropsOrderNotice) {
  const { dataNotice } = props
  const handleOnclick = () => {
    console.log("see more")
  }
  const latestNotices = dataNotice.slice(-4);
  return (
    
      <div className='rounded-md absolute top-[40px] right-[-160px] z-10 border bg-white border-none shadow-2xl'>
      <div className='px-32 py-2 text-[22px]'>Notifications</div>
      {latestNotices.map((item, index) => 
         (
          <div key={index}>
      <div className=' h-[1px] w-full bg-stroke'></div>
          <div className='p-[18px]'>
              <div className='text-primary text-[16px] mb-2'>{item.noticeString}</div>
            <div className='text-unit'>{item.time}</div>
            </div>
            </div>
)
      )
      } 
      <div className=' h-[1px] w-full bg-stroke'></div>
      <div className='flex justify-center items-center py-4'>
      <Button value='See all' type='button' className='bg-white text-center flex ' textStyle="text-primary text-[16px]" handleOnclick={handleOnclick}/>
      </div>
     
  </div>
   
  )
}
