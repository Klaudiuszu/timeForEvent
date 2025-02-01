// lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'lmormq1g', // Upewnij się, że to ten sam projekt ID
  dataset: 'production',
  apiVersion: '2023-01-01', // Użyj aktualnej wersji API
  useCdn: true, // Użyj CDN dla szybszych odpowiedzi
});