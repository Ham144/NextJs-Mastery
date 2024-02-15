import React from 'react'

const Login = () => {
    return (
        <div className='mx-5 my-3 '>
            <form action="GET" className='flex flex-col gap-3 w-[400px] ' >
                <div className='flex justify-between'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id='email' autoComplete='true' />
                </div>
                <div className='flex justify-between'  >
                    <label htmlFor="password">Password :</label>
                    <input type="text" id='password' />
                </div>
                <button type='submit' className='button-primer'>Masuk</button>
            </form>
        </div>
    )
}

export default Login