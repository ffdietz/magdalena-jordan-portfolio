import { EntryFieldTypes } from "contentful";

export type PortfolioEntries = {
  contentTypeId: "magda-jordan-portfolio";
  fields: {
    description: EntryFieldTypes.Text,
    images: EntryFieldTypes.AssetLink[],
    location: EntryFieldTypes.Location,
    title: EntryFieldTypes.Text,
  };
};

export type TProject = {
  title: string,
  location: any,
  description: string,
}

export type TCoordinates = {
  lat: number,
  lon: number,
}