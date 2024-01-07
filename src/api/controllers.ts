import { client } from './client'

export const getProjects = async () =>
  client
    .getEntries({
      content_type: "magda-jordan-portfolio",
    })
    .then((res) => {
      return res.items;
    })
    .catch(console.error);

