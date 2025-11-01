// schemas/featuredProducts.js
export default {
  name: 'featuredProducts',
  title: 'Featured Products Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Select Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: (Rule) => Rule.max(8).warning('You can select up to 8 products only.'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      products: 'products',
    },
    prepare({ title, products }) {
      return {
        title: title || 'Featured Products Block',
        subtitle: products ? `${products.length} product(s) selected` : 'No products selected',
      }
    },
  },
}
