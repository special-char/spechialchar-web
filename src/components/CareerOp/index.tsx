import React from 'react'

type Props = {}

const CareerOP = (props: Props) => {
  return (
    <div className='flex flex-col gap-10 md:flex-row m-10'>
    <div className='flex-1'>
        <h1>Opportunity and growth</h1>
        </div>
        <div className='grid grid-row-2 md:flex-row md:flex-1 gap-10 lg:mt-4'>
                <div className='flex-1'>
                We expect you to work hard on difficult challenges, among high-level professionals who support you. You will take hard decisions, with permission to make mistakes and learn from them. If you have the attitude to make this work, your skills will level up fast and you’ll feel proud of how you grow..
                </div>
                <div className='flex-1'>
                We offer language classes and career progression tracks too.
                </div>
            </div>
        </div>
  )
}

export default CareerOP