import { client } from './client'

export const getProjects = async () =>
  client
    .getEntries({
      content_type: "magda-jordan-portfolio",
      order: ['fields.title'],
    })
    .then((res) => {
      return res.items;
    })
    .catch(console.error);

