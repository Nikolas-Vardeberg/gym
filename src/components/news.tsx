

export const News = ({}) => {
    return(
        <div className="w-full mx-auto bg-inherit py-4 md:py-10 px-8 lg:px-0">
            <div className="container flex space-y-7 flex-col justify-center items-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 justify-between">

                        <div className="w-full h-full flex flex-col space-y-4 overflow-hidden">
                            <img 
                                src="https://i.redd.it/027y5vnaxrzy.jpg" 
                                alt="image" 
                                className="object-cover w-full h-[350px]" 
                            />
                            <div className="flex flex-row space-x-3">
                                <p className="bg-purple-200 text-black px-4 py-2 capitalize w-fit rounded-full">Nyheter</p>
                                <p className="bg-purple-200 text-black px-4 py-2 capitalize w-fit rounded-full">Nyheter</p>
                            </div>
                            <h2 className="font-bold text-2xl leading-normal text-black">Flott barmarksamling for buskerudalpinestene</h2>
                            <p className="font-light text-base text-black">Det ble en flott samling med stort oppøte da buskerud skirets alpint inviterte til kretssamling alpint barmark for u12</p>
                        </div>

                        <div className="w-full h-full flex flex-col space-y-4 overflow-hidden">
                            <img 
                                src="https://premium.vgc.no/v2/images/1f3f2b7c-70f8-4a6f-a680-99e210b01368?fit=crop&format=auto&h=1365&w=2048&s=852ae560ec257ec323c2ae9e1b308e37a80d3147" 
                                alt="image" 
                                className="object-cover w-full h-[350px]" 
                            />
                            <div className="flex flex-row space-x-3">
                                <p className="bg-purple-200 text-black px-4 py-2 capitalize w-fit rounded-full">Nyheter</p>
                                <p className="bg-purple-200 text-black px-4 py-2 capitalize w-fit rounded-full">Nyheter</p>
                            </div>
                            <h2 className="font-bold text-2xl leading-normal text-black">Flott barmarksamling for buskerudalpinestene</h2>
                            <p className="font-light text-base text-black">Det ble en flott samling med stort oppøte da buskerud skirets alpint inviterte til kretssamling alpint barmark for u12</p>
                    </div>


                </div>
            </div>
        </div>
    )
}