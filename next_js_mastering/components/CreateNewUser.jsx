'use client'
import React from 'react'
import { Button, Input } from '@material-tailwind/react'
import { useState } from 'react'


const CreateNewUser = () => {
    const [name, SetName] = useState('')    
    const [age, setAge]   = useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

    const submitHandle = (e)=>{
        e.preventDefault()
        
    }
    
  return (
    <form action="submit" onSubmit={submitHandle} className='flex flex-col gap-3'>
        <Input  label='Name' value={name} type='text' placeholder='Alan Turing' onChange={(e) => {SetName(e.target.value)}}/>
        <Input  label='Age' value={age} type='number' placeholder='41' onChange={(e) => {setAge(e.target.value)}}/>
        <Input  label='Email' value={email} type='email' placeholder='alanturingWW2@hero.com' onChange={(e) => {setEmail(e.target.value)}}/>
        <Input  label='Password' value={password} type='password'  onChange={(e) => {setPassword(e.target.value)}}/>
    <Button type='submit' onClick={submitHandle} className='button-sekunder'>Sign Up</Button>
    </form>
    
  )
}

export default CreateNewUser