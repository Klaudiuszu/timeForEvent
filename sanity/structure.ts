import { StructureBuilder } from 'sanity/desk';

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Blog Posts'),
    ]);

export default myStructure;