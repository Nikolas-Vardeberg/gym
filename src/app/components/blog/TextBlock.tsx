


import {PortableText} from '@portabletext/react'
import React from 'react';

  
export type HeroProps = {
    content: any;
};
  
export type Props = HeroProps;

export default async function TextBlock(params: HeroProps) {
    return(
        <div className="container mx-auto items-center justify-center prose prose-xl py-10 px-8 md:px-0">
            <PortableText value={params.content} />
        </div>
    )
}