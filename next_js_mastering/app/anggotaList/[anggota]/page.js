"user clients"
import React from 'react'

const Anggota = ({ params }) => {
    const { anggota } = params
    return (
        <h1 className='text-center'>{anggota} is our anggota</h1>

    )
}

export default Anggota