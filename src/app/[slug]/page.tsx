import { notFound } from "next/navigation";
import { client } from "../utils/sanity/client";
import { pagesBySlugQuery, test } from "../utils/sanity/querys";
import { Service } from "../components/Service";


interface PageProps {
    params: {slug:string};
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    console.log("params.slug", params.slug)

    const data = await client.fetch(pagesBySlugQuery, {slug: params.slug}, {
        next: {
            revalidate: 10 // seconds
        }
    })

    if (!data) {
        return notFound()
    }

    console.log(data);

 
    return(
        <div>
            {
                data?.sections && data?.sections.map((section: any) => {
                    switch (section._type) {
                        case "service":
                            return <Service key={section._key} serviceItems={section.serviceItems} />
                    }
                })
            }
        </div>
    )
}