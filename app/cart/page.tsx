import React from 'react'
import Header from '@/components/header'
import Footer2 from '@/components/footer2'
import Image from 'next/image'

const page = () => {
  return (
    <div className='font-poppins'>
      <Header/>
      <div>
      <div className='h-[316px] w-full bg-components_bg flex justify-center items-center'>
            <div className='flex justify-between items-center flex-col'>
            <Image src={'/images/logo.png'} alt='logo'
            height={77} width={77}></Image>
            <p className='font-medium text-[52px] leading-10'>Cart</p>
            <div className='flex w-[140px] h-16 justify-between text-xl items-center'>
                <p className='font-medium'>Home</p>
                <p><Image src={'/images/arrow.png'} alt='arrow' 
                height={8} width={14} className='h-[18px] w-[10px]'></Image></p>
                <p className='font-light'>Cart</p>
            </div>
            </div>
        </div>
        <div className='w-full h-[525px] sm:h-[800px] md:h-[800px] lg:h-[800px]
         flex justify-between sm:px-[40px] md:px-[40px] lg:px-[20px]
        px-[100px] py-[72px] sm:flex-col md:flex-col lg:flex-col'>
          <div className='w-[817px] sm:w-[420px] md:w-[520px] lg:w-[620px]
           h-[216px] flex flex-col justify-between'>
            <div className='w-full h-[55px] bg-pinki'>
              <ul className='flex font-medium justify-evenly items-center h-[55px]'>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <div className='w-full h-[120px] flex justify-between items-center'>
                <div className='w-[106px] h-[106px] bg-hamza rounded-[10px] 
                flex items-center'>
                  <Image src={'/images/Asgaard sofa.png'} alt='sofa'
                  height={106} width={106}></Image>
                </div>
                <p className='text-hackathon sm:hidden'>Asgaard sofa</p>
                <p className='text-hackathon sm:text-[12px]'>Rs. 250,000.00</p>
                <div className='w-8 h-8 rounded-[5px] border-2 flex justify-center items-center'>1</div>
                <p className=' sm:text-[12px]'>Rs. 250,000.00</p>
                <Image src={'/images/delete.png'} alt='remove'
                height={22} width={21} className='w-[21] h-[22] sm:hidden md:hidden
                lg:hidden'></Image>
            </div>
          </div>
        <div className='w-[393px] h-[390px] border bg-pinki px-[75px] 
        flex flex-col justify-around pb-20'>
          <p className='font-semibold text-[32px] text-center'>Cart Totals</p>
          <div className='w-full flex justify-between'>
            <p className='font-medium'>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className='w-full flex justify-between'>
            <p className='font-medium'>Total</p>
            <p className='font-medium text-xl text-eelow'>Rs. 250,000.00</p>
          </div>
          <div className='w-full flex justify-center items-center'>
          <button className='w-[222px] h-[59px] border rounded-[15px] border-black text-xl'>Check Out</button>
          </div>
        </div>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default page