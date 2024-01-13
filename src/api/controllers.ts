import { TProject } from "@types";
import { client } from './client'

export const getProjects = async (): Promise<TProject[] | undefined> => {
  try {
    const response = await client.getEntries({
      content_type: import.meta.env.VITE_APP_CONTENTFUL_CONTENT_TYPE,
      order: ["fields.title"],
    });
    
    const projects = response.items.map((entry) => entry.fields);
    
    return projects as TProject[];
  } catch (error) {
    console.error(error);
  }
};