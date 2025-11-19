import { Page } from '@/payload-types'
import React from 'react'
import '@/app/(frontend)/blockcomps/compoBlocks/Compos.css'

// type ButtonBlockType = Extract<Page['layout'][0]['compos'][0], {blockType: 'button'}>

type ButtonBlockType = {
  blockType: 'button'
  text: string
  url?: string
  style: 'primary' | 'secondary'
}

export default function ButtonComponent({ block }: { block: ButtonBlockType }) {
  return (
    <div id="button_block">
      <a href={block.url} className="mi-btn">
        {block.text}
      </a>
    </div>
  )
}
