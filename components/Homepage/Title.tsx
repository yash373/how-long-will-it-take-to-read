import React from 'react'

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div className='font-extrabold text-3xl text-center py-2 capitalize'>
            {title}
        </div>
    )
}

export default Title
