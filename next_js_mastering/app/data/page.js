"use client"
import { Roboto } from 'next/font/google'
import React, { useEffect, useState } from 'react'

const roboto = Roboto({ subsets: ["latin"], weight: "400" })
const Data = () => {
    let forBody;
    const [products, useProducts] = useState([])
    useEffect(() => {
        async function fetchData() {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts")
            data = await data.json()
            console.log(data)
            useProducts(data)
        }
        fetchData()
    }, [])

    const getBody = (product) => {
        const foundData = products.find((pro) => pro.body === product.body)
        forBody = <b> {foundData.body}</b>
    }
    return (
        <section className='flex  justify-around'>
            <ul className='flex flex-col  mt-3 '>{products.map((product) => (

                <li key={product.id} className='flex border-b-2 gap-3 border-blue-300 hover:bg-slate-200 cursor-pointer'
                    onClick={(e) => {
                        const clicked = e.target
                        console.log(clicked)
                    }}>
                    <b key={product.id}> {product.id}</b>
                    {product.title}

                </li>
            ))}
            </ul>
            <section className='mt-24  w-[400px] bg-slate-400 h-[500px] rounded-md'>
                <h2 className='text-center'>Body</h2>
                <p className={`{roboto.className} `}>{forBody}</p>
            </section>
        </section >
    )
}

export default Data