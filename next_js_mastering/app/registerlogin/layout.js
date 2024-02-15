"use client"
import React from 'react'
import Link from 'next/link'

const Register_login = ({ children }) => {

  return (
    <div className='absolute right-9 flex flex-col  w-[600px] items-center mt-5 bg-blue-100 rounded-lg drop-shadow-lg '>
      <h2>Authentication</h2>
      {children}
      <b>or</b>
      <section className='text-center  w-[300px] gap-4 flex mt-9 pb-6 '>

        <Link href={"/registerlogin/login"} className='button-primer'>login here</Link>

        <Link href={"/registerlogin/register"} className='button-sekunder'>Sign up here</Link>
      </section>
    </div>
  )
}

export default Register_login