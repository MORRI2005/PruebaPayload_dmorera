import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import '@/app/(frontend)/blockcomps/block.css'
import Image from 'next/image'
import Link from 'next/link'

type PageProps = Extract<Page['layout'][0], { blockType: 'pageBlock' }>

export default function HeroBlock({ block }: { block: PageProps }) {
  const page = block.page
  const url = typeof page === 'string' ? `/pages/${page}` : page?.slug ? `/${page.slug}` : '#'

  return (
    <div id="page_block">
      <div id="page_block_image">
        {typeof block?.image === 'object' && block.image.url && (
          <Image src={block.image.url} alt={block.image.alt} width={800} height={600} priority />
        )}
        <div id="page_block_description">{block.description}</div>
      </div>
      <div id="page_block_content">
        <Link href={url}>
          <h2 id="page_block_title">{block.title}</h2>
        </Link>
      </div>
    </div>
  )
}
