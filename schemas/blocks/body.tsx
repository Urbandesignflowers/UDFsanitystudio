import React from 'react'



export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        annotations: [
          // Product
          {
            name: 'annotationProduct',
            type: 'annotationProduct'
          },
          // Email
          {
            name: 'annotationLinkEmail',
            type: 'annotationLinkEmail'
          },
          {
            name: 'annotationLinkTel',
            type: 'annotationLinkTel'
          },
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal'
          },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal'
          }
        ],
        decorators: [
          {
            title: 'Italic',
            value: 'em'
          },
          {
            title: 'Strong',
            value: 'strong'
          }
        ],
        
     
      },
      // Regular styles
      styles: [

        
       
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2.25rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h1
            )
          },
          title: 'h1',
          value: 'h1'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h2
            )
          },
          title: 'h2',
          value: 'h2'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.75rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h3
            )
          },
          title: 'h3',
          value: 'h3'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h4
            )
          },
          title: 'h4',
          value: 'h4'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.25rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h5
            )
          },
          title: 'h5',
          value: 'h5'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: 'h6',
          value: 'h6'
        },


        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '3rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-5xl
            )
          },
          title: '48px',
          value: 'text5XL'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2.25rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-4xl
            )
          },
          title: '36px',
          value: 'text4xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.875rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-3xl
            )
          },
          title: '30px',
          value: 'text3xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-2xl
            )
          },
          title: '24px',
          value: 'text2xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.25rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-xl
            )
          },
          title: '20px',
          value: 'textXl'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.125rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: '18px',
          value: 'textLg'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: '16px',
          value: 'textMd'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '0.875rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: '14px',
          value: 'textSm'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '0.75rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: '12px',
          value: 'textXs'
        }

      
      



      ],
      // Paragraphs
      type: 'block'
    },
    // Custom blocks
    {
      name: 'blockAccordion',
      type: 'module.accordion'
    },
    {
      name: 'blockInfo',
      type: 'module.info'
    },
    {
      name: 'blockCallout',
      type: 'module.callout'
    },
    {
      name: 'blockImages',
      type: 'module.images'
    },
    {
      name: 'blockProducts',
      type: 'module.products'
    }
  ]
}
