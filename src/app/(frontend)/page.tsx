import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Page } from '@/payload-types'
import HeroBlock from '@/app/(frontend)/blockcomps/HeroBlock'
import ContentBlock from '@/app/(frontend)/blockcomps/ContentBlock'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({ collection: 'pages', where: { slug: { equals: 'landing' } } })

  if (!page) {
    return <div>Pagina no encontrada</div>
  } else {
    const renderBlock = (block: Page['layout'][0]) => {
      switch (block.blockType) {
        case 'hero':
          return <HeroBlock block={block} key={block.id} />
        case 'content':
          return <ContentBlock block={block} key={block.id} />
        default:
          return null
      }
    }

    return (
      <div id="content">
        <h1 id="titulo">{page.title}</h1>
        <div>{page.content}</div>
        <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
      </div>
    )
  }
}
