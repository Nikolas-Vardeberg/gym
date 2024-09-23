import { Hero } from "./components/Hero"
import { MediaModule } from "./components/MediaModule"
import { NewsBlock } from "./components/NewsBlock"
import { Service } from "./components/Service"
import NotFound from "./components/static/NotFound"
import { client } from "./utils/sanity/client"
import { getHomePageQuery } from "./utils/sanity/querys"

export default async function homePageRoute() {
    const data = await client.fetch(getHomePageQuery, {
    })

    if (!data) {
        return NotFound();
    }

    console.log(data)
    console.log(data[0].sections);
    return(
        <div>
                  {data[0]?.sections && data[0]?.sections?.map((section: any) => {
                      switch (section._type) {
                        case "hero":
                          return <Hero key={section._key} heroItemsProps={section} />
                        case "service":
                            return <Service key={section._key} serviceItems={section.serviceItems} />
                        case "mediaModule":
                            return <MediaModule key={section._key} mediaModuleItems={section}  />
                        case "newsBlock":
                            return <NewsBlock key={section._key} newsItem={section.newsItem} />
                      }
                    })}
        </div>
    )
}