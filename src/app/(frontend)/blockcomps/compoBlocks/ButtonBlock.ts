import type { Block } from 'payload'

export const ButtonBlock: Block = {
  slug: 'button',
  labels: {
    singular: 'Botón',
    plural: 'Botones',
  },
  fields: [
    {
      name: 'text',
      label: 'texto boton',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'Enlace del boton',
      type: 'text',
    },
    {
      name: 'style',
      label: 'Estilo del boton',
      type: 'select',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
      defaultValue: 'primary',
    },
  ],
}
