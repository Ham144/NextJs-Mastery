"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: "300" })

const Home = () => {
  const router = useRouter()
  const navigateTo = (target) => {
    router.push(target)
  }

  return (
    <>
      <div className='flex justify-center m'>
        <h1 className={`{roboto.className} text-center`} ></h1>
        <Image src={"https://media.istockphoto.com/id/1294922842/id/foto/uang-indonesia-di-tangan-anda-berbagai-uang-kertas.jpg?s=612x612&w=0&k=20&c=2f64wAFNA0p2lw3vvOLh_ZPh2z5_GVNU191z2qYTeDQ="} width={1450} height={200} className='contain blur-md mt-8 absolute z-[-1]' />
      </div></>
  )
}

export default Home