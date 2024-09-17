import { notFound } from "next/navigation";


interface PageProps {
    params: {slug:string};
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props
 
    if(!params.slug) {
        notFound();
    }

    return(
        <div>
            slug page
        </div>
    )
}