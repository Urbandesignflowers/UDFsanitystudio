import { PackageIcon } from '@sanity/icons'

export default {
  name: 'collectionsGroup',
  title: 'Collections group',
  type: 'object',
  icon: PackageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional banner or thumbnail image for this collection group',
    },
    {
      name: 'collectionLinks',
      title: 'Collection links',
      type: 'array',
      of: [
        {
          name: 'collection',
          type: 'reference',
          weak: true,
          to: [{ type: 'collection' }],
        },
      ],
    },
    {
      name: 'collectionProducts',
      title: 'Collection products',
      type: 'reference',
      description: 'Products from this collection will be listed',
      weak: true,
      to: [{ type: 'collection' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'collectionProducts.store.title',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled collection group',
        subtitle: subtitle
          ? `Products from: ${subtitle}`
          : 'No collection linked',
        media: media || PackageIcon,
      }
    },
  },
}
