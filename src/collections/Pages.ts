import { ContentBlock } from '@/app/blocks/ContentBlock'
import { HeroBlock } from '@/app/blocks/HeroBlock'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Pagina padre',
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, ContentBlock],
    },
  ],
}
