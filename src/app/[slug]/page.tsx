import { notFound } from "next/navigation";
import { client } from "../utils/sanity/client";
import { pagesBySlugQuery, test } from "../utils/sanity/querys";


interface PageProps {
    params: {slug:string};
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    console.log(await client.fetch(pagesBySlugQuery, { slug: params.slug }));

    console.log(await client.fetch(test, {slug: params.slug}))

    console.log("params.slug", params.slug)

    const data = await client.fetch(pagesBySlugQuery, {slug: params.slug})

    console.log(data);
 
    return(
        <div>
            <h1>{data?.slug}</h1>
        </div>
    )
}