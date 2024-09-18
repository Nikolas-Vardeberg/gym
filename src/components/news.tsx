import Image from "next/image"


export const News = ({}) => {
    return(
        <div className="w-full mx-auto bg-inherit py-4 md:py-10 px-8 lg:px-0">
            <div className="container flex space-y-7 flex-col justify-center items-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 justify-between">

                    <div className="w-full h-full flex flex-col space-y-4 overflow-hidden hover:scale-105 transition-all duration-150">
                        <Image 
                            alt="image"
                            className="object-cover w-full h-[350px]"
                            src="/image.png"
                            width={300}
                            height={300}
                        />
                        <div className="flex flex-row space-x-3">
                            <div className="bg-purple-300 text-purple-800 text-sm items-center justify-center flex px-4 py-2 uppercase w-fit rounded-full">Nyheter</div>
                            <div className="bg-purple-300 text-purple-800 text-sm items-center justify-center flex px-4 py-2 uppercase w-fit rounded-full">Nyheter</div>
                        </div>
                        <h2 className="font-bold text-2xl md:text-3xl leading-normal text-black">Flott barmarksamling for buskerudalpinestene</h2>
                        <p className="font-light text-base md:text-lg text-black">Det ble en flott samling med stort oppøte da buskerud skirets alpint inviterte til kretssamling alpint barmark for u12</p>
                        </div>

                </div>
            </div>
        </div>
    )
}