import {TbSection} from 'react-icons/tb';
import RangeSliderInput from '../../../components/inputs/RangeSlider';

export default {
  name: 'pageBannerOverlay',
  type: 'object',
  title: 'Page Banner Overlay',
  icon: TbSection,
  fieldsets: [
    {name: 'layout', title: 'Layout', options: {columns: 1}},
    {name: 'image', title: 'Background image', options: {collapsible: true}},
    {name: 'content', title: 'Content', options: {collapsible: true}},
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Studio label only — not shown on the site',
    },
    {
      name: 'autoHeight',
      type: 'boolean',
      title: 'Auto height',
      description: 'Banner height follows the image (best with Contain image display)',
      initialValue: false,
      fieldset: 'layout',
    },
    {
      name: 'bannerHeight',
      type: 'number',
      title: 'Banner height',
      description: 'Height in pixels on desktop (mobile scales to ~65%)',
      initialValue: 440,
      fieldset: 'layout',
      inputComponent: RangeSliderInput,
      options: {
        min: 120,
        max: 900,
        step: 10,
        unit: 'px',
      },
      validation: (Rule) => Rule.min(120).max(900),
      hidden: ({parent}) => parent?.autoHeight === true,
    },
    {
      name: 'bannerWidth',
      type: 'number',
      title: 'Banner width',
      description: 'Width as a percentage of the page content area',
      initialValue: 100,
      fieldset: 'layout',
      inputComponent: RangeSliderInput,
      options: {
        min: 50,
        max: 100,
        step: 5,
        unit: '%',
      },
      validation: (Rule) => Rule.min(50).max(100),
    },
    {
      name: 'edgeToEdge',
      type: 'boolean',
      title: 'Full screen width',
      description: 'Extends the banner to the edges of the screen',
      initialValue: false,
      fieldset: 'layout',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image (desktop)',
      fieldset: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'imageMobile',
      type: 'image',
      title: 'Image (mobile)',
      fieldset: 'image',
      description: 'Optional — uses desktop image on mobile when empty',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'imageFit',
      type: 'string',
      title: 'Image display',
      description:
        'Cover fills the banner. Contain shows the full image — use with Auto height to avoid cropping.',
      initialValue: 'cover',
      fieldset: 'image',
      options: {
        list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Contain', value: 'contain'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'text',
      type: 'minimal',
      title: 'Text',
      fieldset: 'content',
    },
    {
      name: 'textSize',
      type: 'number',
      title: 'Text size',
      description: 'Scales headline and body text',
      initialValue: 125,
      fieldset: 'content',
      inputComponent: RangeSliderInput,
      options: {
        min: 80,
        max: 200,
        step: 5,
        unit: '%',
      },
      validation: (Rule) => Rule.min(80).max(200),
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.max(1),
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
    },
    {
      name: 'overlayStrength',
      type: 'string',
      title: 'Overlay strength',
      description: 'Darkens the image so text stays readable',
      initialValue: 'medium',
      fieldset: 'content',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Light', value: 'light'},
          {title: 'Medium', value: 'medium'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'textTone',
      type: 'string',
      title: 'Text colour',
      initialValue: 'light',
      fieldset: 'content',
      options: {
        list: [
          {title: 'Light (white)', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'textAlignHorizontal',
      type: 'string',
      title: 'Text alignment (horizontal)',
      initialValue: 'left',
      fieldset: 'content',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'textAlignVertical',
      type: 'string',
      title: 'Text alignment (vertical)',
      initialValue: 'middle',
      fieldset: 'content',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Middle', value: 'middle'},
          {title: 'Bottom', value: 'bottom'},
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      bannerHeight: 'bannerHeight',
      bannerWidth: 'bannerWidth',
      autoHeight: 'autoHeight',
      imageFit: 'imageFit',
    },
    prepare({title, image, bannerHeight, bannerWidth, autoHeight, imageFit}) {
      const heightLabel = autoHeight
        ? 'Auto height'
        : `${bannerHeight ?? 440}px tall`;
      const widthLabel = `${bannerWidth ?? 100}% wide`;
      const fit = imageFit === 'contain' ? 'Contain' : 'Cover';

      return {
        title: title ? `${title} - Page Banner Overlay` : 'Page Banner Overlay',
        subtitle: `${heightLabel} · ${widthLabel} · ${fit}`,
        media: image,
      };
    },
  },
};
