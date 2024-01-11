import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
});