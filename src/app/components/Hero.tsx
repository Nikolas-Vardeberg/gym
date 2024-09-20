import Image from "next/image";
import { urlFor } from "../utils/sanity/image";
import Link from "next/link";




export type HeroItemsProps = {
    body: string;
    backgroundImage: any;
    heading: string;
    cta: {
        hasPrimaryCta: boolean;
        text: string;
        url: string;
    }
}

export type HeroProps = {
    heroItemsProps: HeroItemsProps[];
}

export type Props = HeroProps


export const Hero = ({heroItemsProps}: Props) => {
    const itemsArray = Array.isArray(heroItemsProps) ? heroItemsProps : [heroItemsProps];
    return(
        <div className="w-full h-screen">
            {
                itemsArray.map((t, x) => (
                <>
                   <div className="relative w-full h-screen">
                    <Image
                        src={t.backgroundImage ? urlFor(t.backgroundImage).url() : ""}
                        height={1200}
                        width={1200}
                        alt="backgroundImage"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center mx-auto">
                        <div className="p-4 space-y-5 text-center items-center justify-center mx-auto">
                        <h1 className="text-white font-normal text-6xl">{t.heading}</h1>
                        <p className="text-white text-lg font-normal">{t.body}</p>
                        <div className="flex items-center justify-center mx-auto">
                        <Link href={t.cta.url} className="items-center outline-none px-5 h-0 py-5 justify-center flex rounded-full text-purple-800 transition-all duration-300 bg-purple-300 hover:text-white hover:bg-purple-500">
                            {t.cta.text}
                        </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            ))}
        </div>
    )
}