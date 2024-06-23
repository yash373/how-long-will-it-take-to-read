import React from 'react'
import Title from '@/components/Homepage/Title'
import { Button } from '@/components/Homepage/Button'

const Index = () => {
  return (
    <div className='flex flex-col'>
      <Title title='how long will it take to read?' />
      <Button name='Start' link='/info' />
    </div>
  )
}

export default Index
