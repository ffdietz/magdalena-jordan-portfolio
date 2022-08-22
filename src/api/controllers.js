import { client } from './client'

export const getProjects = async () =>
  client
    .getEntries({
      content_type: process.env.REACT_APP_CF_CONTENT_TYPE,
      order: 'sys.createdAt'
    })
    .then(res => { return res.items })
    .catch(console.error);

