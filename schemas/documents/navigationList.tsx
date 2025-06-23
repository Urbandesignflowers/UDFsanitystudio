import { DocumentIcon } from '@sanity/icons'
import { validateSlug } from '../../utils/validateSlug'

export default {
  name: 'navigationList',
  title: 'Navigation List',
  type: 'document',

  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'breadcrumbCollection',
      title: 'Breadcrumb Collection Reference',
      type: 'reference',
      to: [{ type: 'collection' }],
      description:
        'This provides the link for breadcrumb collection pages like the Funeral page or the Gift Shop page.'
    },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'linkInternal',
          type: 'linkInternal'
        }
      ]
    }
  ]
}
