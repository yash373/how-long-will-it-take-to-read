import React from 'react'
import { useRouter } from 'next/router'

interface ButtonProps {
    name: string,
    link: string
}

export const Button = ({ name, link }: ButtonProps) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(link)
    }

    return (
        <div className='flex my-auto justify-center items-center w-full'>
            <button onClick={handleClick} className='font-semibold bg-green-500 hover:bg-green-700 rouded-md px-4 py-2 flex rounded-md' >{name}</button>
        </div>
    )
}
