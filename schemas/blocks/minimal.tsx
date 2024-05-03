import React from 'react'

export default {
  name: 'minimal',
  title: 'Text',
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
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal'
          },
          {
            name: 'annotationLinkTel',
            type: 'annotationLinkTel'
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
        ]
      },
      // Regular styles
      styles: [
        { title: 'Normal', value: 'normal' },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'H1',
          value: 'h1'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.25 }}>{children}</div>
            )
          },
          title: 'H2',
          value: 'h2'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.75rem', lineHeight: 1.25 }}>{children}</div> // Adjust the font size as needed for h3
            )
          },
          title: 'H3',
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
          title: 'Text 5XL',
          value: 'text5XL'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '2.25rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-4xl
            )
          },
          title: 'Text 4XL',
          value: 'text4xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.875rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-3xl
            )
          },
          title: 'Text 3XL',
          value: 'text3xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.5rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-2xl
            )
          },
          title: 'Text 2XL',
          value: 'text2xl'
        },
        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.25rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for text-xl
            )
          },
          title: 'Text XL',
          value: 'textXl'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1.125rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: 'Text LG',
          value: 'textLg'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '1rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: 'Text MD',
          value: 'textMd'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '0.875rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: 'Text SM',
          value: 'textSm'
        },

        {
          blockEditor: {
            render: ({ children }) => (
              <div style={{ fontSize: '0.75rem', lineHeight: 1.0 }}>{children}</div> // Adjust the font size as needed for h6
            )
          },
          title: 'Text XS',
          value: 'textXs'
        }
      ],
      // Paragraphs
      type: 'block'
    },
    {
      name: 'svg',
      type: 'image',
      title: 'SVG',
      validation: Rule =>
        Rule.error().custom(image => {
          if (image.asset._ref.slice(-3) != 'svg') {
            return "Please upload SVG's only."
          } else {
            return true
          }
        })
    }
  ]
}
