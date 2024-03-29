import { Button } from '@/components/ui/button'
import { Eco1 } from '@/lib/constData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const EcomGrid3 = (props: Props) => {
    return (
        <>
            <section className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 xl:px-container px-3  ">
                {Eco1.section3.map((item) => (

                    <div key={item.id} className="flex gap-2 sm:gap-5 ">
                        <Image src={item.url} alt="" height={50} width={50} />
                        <div className="sm:text-3xl text-2xl pt-2 font-semibold">{item.title}</div>

                    </div>
                ))}
                <div className="pt-5">
                    <Link className="pt-10" href={'https://thespecialcharacter.graphy.com/'}>
                        <Button>
                            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                                Discuss your web <span>app development project </span>
                                <span>&rarr;</span>
                            </span>
                        </Button>
                    </Link>
                </div>

            </section>
        </>
    )
}

export default EcomGrid3