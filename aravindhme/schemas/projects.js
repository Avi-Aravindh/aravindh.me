import { string } from 'prop-types';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          title: 'button',
          name: 'Button',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order_id',
      title: 'order',
      type: 'number',
    },
  ],
};
