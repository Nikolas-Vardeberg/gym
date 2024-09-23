import { client } from "@/app/utils/sanity/client";
import { blogsBySlugQuery } from "@/app/utils/sanity/querys";
import TextBlock from "@/app/components/blog/TextBlock";
import ImageBlock from "@/app/components/blog/ImageBlock";
import Membership from "@/app/components/static/Membership";
import NotFound from "@/app/components/static/NotFound";


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
      return NotFound();
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