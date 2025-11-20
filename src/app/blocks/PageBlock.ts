import { Block } from 'payload'

export const PageBlock: Block = {
  slug: 'sites',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'descripton',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
