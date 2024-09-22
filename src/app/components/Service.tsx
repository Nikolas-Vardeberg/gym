import Image from "next/image";
import { urlFor } from "../utils/sanity/image";
import Link from "next/link";

export type ServiceItem = {
    heading: string;
    imageBlock: {
        image: any;
        alt: string;
    }
    cta: {
        text: string;
        url: string;
        hasPrimaryCta: boolean;
    };
}

export type Service = {
    serviceItems: ServiceItem[];
}

export type Props = Service

export const Service = ({serviceItems}: Props) => {
    return(
        <div className="w-full mx-auto bg-inherit py-4 md:py-10 px-8 lg:px-0">
            <div className="container flex space-y-7 flex-col justify-center items-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 justify-between">
                    {serviceItems?.map((items, i) => {
                        return(
                            <div className="w-full h-full flex flex-col flex-grow mx-auto" key={i}>
                                <Image
                                    alt={items.imageBlock.alt}
                                    className="object-cover w-full h-[350px]"
                                    src={items.imageBlock.image ? urlFor(items.imageBlock.image).url(): ""}
                                    width={300}
                                    height={300}
                                />
                                <div className="py-4 flex pr-7 items-start justify-start">
                                    <div className="flex justify-between items-center w-full flex-grow">
                                        <h3 className="font-bold text-xl text-black">{items.heading}</h3>

                                        {items.cta && (
                                            <Link href={items.cta.url} className={`items-center outline-none min-w-fit px-3 h-0 py-5 justify-center flex rounded-full text-purple-800 transition-all duration-300 ${items.cta.hasPrimaryCta ? "bg-purple-300 hover:text-white hover:bg-purple-500" : "bg-inherit"}`}
                                            >
                                            {items.cta.text}
                                        </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}