import React from 'react'
import { Button } from './Button'

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className='my-auto space-y-5 flex flex-col py-2'>
            <p className='text-3xl font-extrabold text-center capitalize'>
                {title}
            </p>
            <Button name='Start' link='/info' />
        </div>
    )
}

export default Title
