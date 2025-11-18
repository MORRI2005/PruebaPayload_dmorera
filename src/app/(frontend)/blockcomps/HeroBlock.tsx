import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import '@/app/(frontend)/blockcomps/block.css'

type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>

export default function HeroBlock({ block }: { block: HeroProps }) {
  return (
    <div id="hero_block">
      <h1 id="hero_title">{block.title}</h1>
      <RichText data={block.subheading}></RichText>
    </div>
  )
}
