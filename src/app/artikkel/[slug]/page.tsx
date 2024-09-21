import { client } from "@/app/utils/sanity/client";
import { notFound } from "next/navigation";
import { blogsBySlugQuery } from "@/app/utils/sanity/querys";
import TextBlock from "@/app/components/blog/TextBlock";
import ImageBlock from "@/app/components/blog/ImageBlock";
import Membership from "@/app/components/static/Membership";


interface PageProps {
    params: { slug: string };
}
  
export default async function blogBySlugRoute(props: PageProps) {
    const { params } = props;
  
    const data = await client.fetch(
      blogsBySlugQuery,
      { slug: params.slug },
      {
        next: {
          revalidate: 10,
        },
      }
    );
  
    if (!data) {
      return notFound();
    }
  
    return (
        <div>
            {data?.sections && data?.sections.map((section: any) => {
                switch (section._type) {
                    case "textBlock":
                        return <TextBlock key={section._key} content={section.content} />
                    case "imageBlock":
                        return <ImageBlock key={section._key} imageBlock={section}   />
                }
            })}
            <Membership />
        </div>
    )
  }