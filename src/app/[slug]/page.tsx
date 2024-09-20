import { notFound } from "next/navigation";
import { client } from "../utils/sanity/client";
import { pagesBySlugQuery } from "../utils/sanity/querys";
import { Service } from "../components/Service";
import { NewsBlock } from "../components/NewsBlock";
import { MediaModule } from "../components/MediaModule";


interface PageProps {
    params: {slug:string};
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    console.log("params.slug", params.slug)

    const data = await client.fetch(pagesBySlugQuery, {slug: params.slug}, {
        next: {
            revalidate: 10 
        }
    })

    if (!data) {
        return notFound()
    }

    return(
        <div>
            {
                data?.sections && data?.sections.map((section: any) => {
                    switch (section._type) {
                        case "service":
                            return <Service key={section._key} serviceItems={section.serviceItems} />
                        case "mediaModule":
                            return <MediaModule key={section._key} mediaModuleItems={section} />
                        case "newsBlock":
                            return <NewsBlock key={section._key} newsItem={section.newsItem} />
                    }
                })
            }
        </div>
    )
}