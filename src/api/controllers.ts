import { client } from './client'

export const getProjects = async () =>
  client
    .getEntries({
      content_type: import.meta.env.VITE_APP_CONTENTFUL_CONTENT_TYPE,
      order: ["fields.title"],
    })
    .then((res) => {
      return res.items;
    })
    .catch(console.error);

