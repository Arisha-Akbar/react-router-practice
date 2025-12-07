import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='py-16 bg-white text-center text-2xl font-bold'>
    user:{id}
    
    </div>
  )
}

export default User