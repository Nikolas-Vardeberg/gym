import { Hero } from "./components/Hero"
import { MediaModule } from "./components/MediaModule"
import { NewsBlock } from "./components/NewsBlock"
import { Service } from "./components/Service"
import { client } from "./utils/sanity/client"
import { getHomePageQuery } from "./utils/sanity/querys"

export default async function homePageRoute() {
    const data = await client.fetch(getHomePageQuery, {
    })

    if (!data) {
        return <h1>Create a page in sanity</h1>
    }

    console.log(data)
    console.log(data[0].sections);
    return(
        <div>
                  {data[0]?.sections && data[0]?.sections?.map((section: any) => {
                      switch (section._type) {
                        case "hero":
                          return <Hero key={section._key} heroItemsProps={section} />
                      }
                    })}
            <pre>
                {JSON.stringify(data, undefined, 2)}
            </pre>
        </div>
    )
}