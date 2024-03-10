
import HomeAccordian from "@/components/HomeAccordian"
import { Button } from "@/components/ui/button"
import { homeAccordiandata } from "@/lib/constData"

const AccCards = () => {
    return (
        <>
            <div className="bg-yellow-300 max-sm:px-4 px-8 lg:px-52 py-12 md:py-24  ">
                <h1 className="font-bold  text-2xl md:text-4xl lg:text-5xl flex md:justify-start justify-center">How we can help you</h1>
                <HomeAccordian data={homeAccordiandata} />
                <div className="flex md:justify-start justify-center" ><Button variant="default" size="sm" className='px-16 md:px-20 py-7 text-base '>
                    Discuss my Project
                </Button>
                </div>
            </div>
        </>
    )
}
export default AccCards
