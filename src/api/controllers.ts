import { ProjectEntry, ProjectFields} from '@types';
import { client } from './client'

export const getProjects = async (): Promise<ProjectEntry[] | undefined> => {
  try{
    const response = await client.getEntries({
      content_type: import.meta.env.VITE_APP_CONTENTFUL_CONTENT_TYPE,
      order: ["fields.title"],
    });

    const projects: ProjectFields[] = response.items.map((entry) => entry.fields)
    
    return projects as ProjectEntry[];
  } catch (error){ console.log(error) }
}

  
  // await client
  //   .getEntries({
  //     content_type: import.meta.env.VITE_APP_CONTENTFUL_CONTENT_TYPE,
  //     order: ["fields.title"],
  //   })
  //   .then((response) => {
  //     return response.items;
  //   })
  //   .catch(console.error);