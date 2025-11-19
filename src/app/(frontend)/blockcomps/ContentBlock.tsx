import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'
import ButtonComponent from '@/app/(frontend)/blockcomps/compoBlocks/ButtonComponent'

type ContentProps = Extract<Page['layout'][0], { blockType: 'content' }>

export default function ContentBlock({ block }: { block: ContentProps }) {
  return (
    <div id="content_block">
      <h2>{block.title}</h2>
      <RichText data={block.content} />
      {block.compos?.map((innerBlock, i) => {
        switch (innerBlock.blockType) {
          case 'button':
            return <ButtonComponent key={i} block={innerBlock}></ButtonComponent>
          default:
            return null
        }
      })}
    </div>
  )
}
