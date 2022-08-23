import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: process.env.REACT_APP_CF_SPACE,
  accessToken: process.env.REACT_APP_CF_TOKEN
})