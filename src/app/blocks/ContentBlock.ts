import { Block } from 'payload'
import { ButtonBlock } from '@/app/(frontend)/blockcomps/compoBlocks/ButtonBlock'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: 'Contenido',
    plural: 'Contenidos',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'compos',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}
