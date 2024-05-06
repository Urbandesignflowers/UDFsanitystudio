import { FiMail } from 'react-icons/fi'

export default {
  name: 'contactBanner',
  type: 'object',
  title: 'Contact Banner',
  icon: FiMail,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'minimal'
    },
    {
      title: 'Form Text',
      name: 'formText',
      type: 'minimal'
    },
    {
      title: 'Google Maps',
      name: 'googleMaps',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title ? `${title} - Contact Form` : 'Contact Form'
      }
    }
  }
}
