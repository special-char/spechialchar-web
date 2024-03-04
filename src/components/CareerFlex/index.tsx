import React from 'react';

type Props = {};

const CareerFlex = (props: Props) => {
    return (
        <div className='flex flex-col gap-10 md:flex-row m-10'>
            <div className='flex-1'>
                <h1>Flexibility and balance</h1>
                <h6>We believe in hard work. That means you honestly give your best effort. It doesn’t mean you give every waking hour.</h6>
            </div>
            <div className='grid grid-cols-2 md:flex-row md:flex-1 gap-10 lg:mt-4'>
                <div className='flex-1'>
                    Our crew is motivated and accountable, so they earn a lot of trust. Flexible and remote working arrangements are no problem.
                </div>
                <div className='flex-1'>
                    If you’re so stuck on a hard problem that you need to switch gears, head to the gym to work out, or to the Playstation to shoot bad guys.
                </div>
            </div>
        </div>
    );
};

export default CareerFlex;
