"use client"
import { NextResponse } from 'next/server'
import React, { useState } from 'react'


const Addnewuser = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")

    let addnewuser = async () => {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ name, age, hobby })
        })
        const respones = await response.json()
        if (respones.ok) {
            alert("new user added successfully")
        }
        else {
            alert("new user failed to be created")
        }
    }

    return (
        <section className='flex flex-col w-[300px] mx-auto mt-20 gap-5 drop-shadow-lg'>
            <input type="text"
                onChange={e => setName(e.target.value)}
                placeholder='Alan turing'
                value={name}
                className='border-b-2 border-blue-300 text-center'
            />
            <input type="number"
                onChange={e => setAge(e.target.value)}
                placeholder='24'
                value={age}
                className='border-b-2 border-blue-300 text-center '
            />
            <input type="text"
                onChange={e => setHobby(e.target.value)}
                placeholder='sepak kepala'
                value={hobby}
                className='border-b-2 border-blue-300 text-center'
            />

            <button onClick={addnewuser} className='button-primer drop-shadow-lg transition'>Submit</button>
        </section>
    )
}




export default Addnewuser