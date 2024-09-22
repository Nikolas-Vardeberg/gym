import Image from "next/image";
import { client } from "../utils/sanity/client";
import { getAllBlogsQuery } from "../utils/sanity/querys";
import { urlFor } from "../utils/sanity/image";

export type NewsItem = {
  imageBlock: {
    image: any;
    alt: string;
  };
  heading: string;
  description: string;
  parents: {
    title: string;
    slug: string;
  }[];
};

export type NewsBlock = {
  newsItem: NewsItem[];
};

export type Props = NewsBlock;

export default async function blogPageRoute({ newsItem }: Props) {
  const data = await client.fetch(getAllBlogsQuery, {
    //REVALIDATE
  });

  console.log(data);

  return (
    <div className="w-full mx-auto bg-inherit py-8 md:py-10 px-8 lg:px-0">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6">
                  {data?.map((i: any, x: any) => {
                    return (
                      <div key={x} className="w-full h-full flex flex-col overflow-hidden transition-all hover:scale-105 duration-200 group gap-3">
                        <Image
                          alt={i.imageBlock.alt}
                          className="object-cover w-full h-[350px] aspect-square"
                          src={
                            i.imageBlock.image
                            ? urlFor(i.imageBlock.image).url()
                            : ""
                          }
                          width={300}
                          height={300}
                        />
                          <div className="flex flex-col gap-3 items-start justify-center mx-auto bg-inherit ">
                             <div className="flex-row inline-flex flex-grow gap-1 w-full">
                                {i.parents?.map((t: any) => (
                                  <div key={t} className="bg-blue-600 text-white font-normal text-sm items-center justify-center flex px-6 py-2 uppercase w-fit rounded-full">
                                    {t.title}
                                   </div>
                                ))}
                                </div>
                                   <h2 className="text-3xl line-clamp-2  leading-normal !font-bold !text-black group-hover:underline underline-offset-4 ">
                                    {i.heading}
                                   </h2>
                                  <p className="text-base md:text-lg font-normal text-black overflow-hidden">
                                    {i.description}
                                  </p>
                                </div>
                            </div>
                          );
                        })}
        </div>
      </div>
    </div>
  );
}
