import Image from "next/image";
import { client } from "../utils/sanity/client";
import { getAllBlogsQuery } from "../utils/sanity/querys";
import { urlFor } from "../utils/sanity/image";






export type NewsItem = {
    image: any
    heading: string
    description: string;
    parents: {
        title: string;
        slug: string;
    }[];
}

export type NewsBlock = {
    newsItem: NewsItem[];
}

export type Props = NewsBlock

export default async function blogPageRoute({ newsItem}: Props) {

    const data = await client.fetch(getAllBlogsQuery, {
        //REVALIDATE
    });

    console.log(data);

    return(
        <div className="w-full mx-auto bg-inherit py-4 md:py-10 px-8 lg:px-0">
            <div className="container flex space-y-7 flex-col justify-center items-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 justify-between">

                    {data?.map((item: any, x: any) => {
                        console.log(item.parents)
                        return(
                            <div key={x} className="w-full h-full flex flex-col space-y-4 overflow-hidden hover:scale-105 transition-all duration-150">
                            <Image
                               alt="newsItem"
                               className="object-cover w-full h-[350px]"
                               src={item.image ? urlFor(item.image).url(): ""}
                               width={300}
                               height={300}
                           />
                           <div className="flex flex-row flex-grow gap-1 ">
                               {item.parents?.map(t => (
                                   <div className="bg-purple-300 text-purple-800 text-sm items-center justify-center flex px-4 py-2 uppercase w-fit rounded-full">{t.title}</div>
                               ))}
                           </div>
                           <h2 className="font-bold text-2xl leading-normal text-black">{item.heading}</h2>
                           <p className="font-light text-base md:text-lg text-black">{item.description}</p>
                       </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}