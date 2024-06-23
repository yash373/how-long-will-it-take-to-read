import React from 'react'

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div>
            {title}
        </div>
    )
}

export default Title
