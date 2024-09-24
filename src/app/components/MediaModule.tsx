import Image from "next/image";
import { urlFor } from "../utils/sanity/image";
import Link from "next/link";

export type MediaModuleItems = {
    imageBlock: {
        image: any;
        alt: string;
    }
    heading: string;
    body: string;
    imageOnRight: boolean;
    cta: {
        hasPrimaryCta: boolean;
        text: string;
        url: string;
    }
}

export type MediaModule = {
    mediaModuleItems: MediaModuleItems[] | MediaModuleItems;
}

export type Props = MediaModule

export const MediaModule = ({mediaModuleItems}: Props) => {

    const itemsArray = Array.isArray(mediaModuleItems) ? mediaModuleItems : [mediaModuleItems];
    return(
        <div className="w-full bg-inherit mx-auto items-center justify-center px-8 lg:px-0">
            <div className="container mx-auto items-center justify-center">

            {
                    itemsArray.map((t, x) => (
                        <div key={x} className="grid grid-cols-1 lg:grid-cols-2 group mx-auto justify-between overflow-hidden items-center bg-purple-200 border-purple-800 border rounded-lg">
                        <div className="w-full bg-green-500">
                            <Image 
                                alt={t.imageBlock.alt}
                                src={t.imageBlock.image ? urlFor(t.imageBlock.image).url(): ""}
                                className="w-full lg:h-[500px] h-[350px] object-cover"
                                height={400}
                                width={400}
                            />
                        </div>
                        <div className="w-full items-center lg:items-start flex flex-col gap-4 p-8 space-y-4 flex-grow">
                            <h2 className="text-purple-950 text-5xl leading-normal text-center lg:text-start font-bold">{t.heading}</h2>
                            <p className="text-purple-950 text-base text-center lg:text-start font-medium leading-snug">{t.body}</p>
    
                            <Link href={t.cta.url} className={`items-center group outline-none min-w-fit px-5 h-0 py-5 justify-center flex font-bold rounded-full transition-all duration-300 text-purple-800 ${t.cta.hasPrimaryCta ? "bg-purple-300 group-hover:text-purple-300 group-hover:bg-purple-800 hover:text-purple-300" : "bg-inherit"}`}>
                                {t.cta.text}    
                            </Link>
    
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    )
}