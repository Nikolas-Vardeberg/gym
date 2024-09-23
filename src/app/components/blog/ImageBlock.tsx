import Image from "next/image";
import { HeroProps } from "../Hero";
import { urlFor } from "@/app/utils/sanity/image";



export type ImageBlockProps = {
    image: any;
    alt: string;
}

export type ImageBlock = {
    imageBlock: ImageBlockProps;
}

export type Props = ImageBlock;

export default async function ImageBlock(params: ImageBlock) {
    return(
        <div className="container mx-auto max-w-3xl items-center justify-center flex py-10 px-8 md:px-0">
            <Image
                src={params.imageBlock.image ? urlFor(params.imageBlock.image).url(): ""}
                alt={params.imageBlock.alt}
                height={400}
                width={400}
                className="w-full"
            />
        </div>
    )
}