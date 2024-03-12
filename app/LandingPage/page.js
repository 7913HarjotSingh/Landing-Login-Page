'use client'

import Link from 'next/link'
import React from 'react'

const Landing = () => 
{
  return(
          <div className='ml-4 border-2 w-1/2 h-1/2 bg-transparent'>

          <div className='py-4 px-4'>

          <h1 className='font-semibold text-2xl'> Become Verified! </h1>  

          <p className='my-1 text-4xl font-bold'> Get Your Kyc Done </p>

          <p> Sumbit your authentic documents to initiate the KYC process and start verification. </p>

          <p> Achieve verified status upon successful completion. </p>

          <div className='flex items-center gap-4 mt-3'>

          <Link className='bg-violet-500 text-white rounded-xl py-3 px-3 text-2xl' href='/Customer_Login'> Customer Login </Link>
          <Link className='bg-violet-500 text-white rounded-xl py-3 px-3 text-2xl' href='/Admin_Login'> Admin Login </Link>

          </div>

          </div>
            
          </div>
        )
}

export default Landing