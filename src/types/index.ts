import { Asset, EntryFieldTypes, EntrySkeletonType } from "contentful";

export type ProjectFields = {
    title?: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    location?: EntryFieldTypes.Location;
    images?: Asset[];
};

export type Coordinates = {
  lat: number,
  lon: number,
}

export type ProjectEntry = EntrySkeletonType<ProjectFields>