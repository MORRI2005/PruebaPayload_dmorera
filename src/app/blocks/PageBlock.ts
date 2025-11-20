import { Block } from 'payload'

export const PageBlock: Block = {
  slug: 'sites',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titulo',
      required: true,
    },
    {
      name: 'descripton',
      type: 'textarea',
      label: 'Descripcion',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'page',
      label: 'Pagina destino',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
  ],
}
