'use client'

import React from 'react'

const Customer_Login = () => 
{
    const SubmitHandler = (e)=>
    {
       e.preventDefault();
    }

   return(
            <div className='my-20 ml-3 h-1/2 w-1/3 bg-transparent border-2'>

            <div className='py-4 px-4'>

            <form onSubmit={SubmitHandler}>

            <h1 className='text-3xl font-bold my-3'> Customer Login </h1>

            <input type='email'
                className='border-zinc-800 px-4 py-2 border-2 text-2xl'
                placeholder='Enter your email here'>

            </input>

            <br></br>

            <input type='password'
                className='border-zinc-800 px-4 py-2 border-2 text-2xl mt-2'
                placeholder='Enter your password here'>

            </input>

            <br></br>

            <button  className='bg-violet-500 text-white rounded-xl py-3 px-3 text-2xl mt-3'> Sign in </button>

            </form>

            </div>

            </div>
         )
}

export default Customer_Login