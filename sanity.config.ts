import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemaTypes';
import myStructure from './sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Time For Event Astro',
  projectId: 'lmormq1g',
  dataset: 'production',
  plugins: [deskTool({ structure: myStructure }), visionTool()],
  schema: schema,
});