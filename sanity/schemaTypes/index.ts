import { SchemaTypeDefinition } from 'sanity';

const postSchema: SchemaTypeDefinition = {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema], // Dodaj swoje schematy tutaj
};