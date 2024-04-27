import { TbSection } from 'react-icons/tb';

export default {
  name: 'pageBannerExtended',
  type: 'object',
  title: 'Page Banner Extended',
  icon: TbSection,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'items',
      type: 'array',
      validation: Rule => Rule.max(2).min(1),
      title: 'Image & Text',
      of: [
        {
          name: 'textObject',
          type: 'object',
          title: 'Text',
          fields: [
            { type: 'minimal', title: 'Text', name: 'text' },
           
            {
                name: 'cta',
                title: 'Call to action',
                type: 'array',
                validation: Rule => Rule.max(1),
                of: [
                  {
                    type: 'linkInternal'
                  },
                  {
                    type: 'linkExternal'
                  }
                ]
              }
          ],
          preview: {
            prepare() {
              return {
                title: 'Text'
              };
            }
          }
        },
        {
          name: 'Image',
          type: 'object',
          title: 'Image',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image (Desktop)',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ]
            },

            {
              name: 'imageMobile',
              type: 'image',
              title: 'Image (Mobile)',
              description: 'Only for fullWidth banners',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ]
            },

            {
                name: 'cta',
                title: 'Call to action',
                type: 'array',
                validation: Rule => Rule.max(1),
                of: [
                  {
                    type: 'linkInternal'
                  },
                  {
                    type: 'linkExternal'
                  }
                ]
              }
            // Add CTA field inside image object
           
          ],

          preview: {
            prepare() {
              return {
                title: 'Image'
              };
            }
          }

        }
      ]
    },

    {
        name: 'fullWidth',
        type: 'boolean',
        title: 'Full Width',
        default: false,
        readOnly: ({ parent }) => parent.items && parent.items.length > 1
     
      }
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items'
    },
    prepare({ title, items }) {
      const image = items?.find(item => item._type === 'image');

      if (!items || items.length === 0) {
        return {
          title: `${title} - No content - Page Banner Extended`,
          // Return null for media when there's no image
          media: null
        };
      }
      return {
        title: title ? `${title} - Page Banner Extended`  : 'Page Banner Extended',
        media: image
      };
    }
  }
};
