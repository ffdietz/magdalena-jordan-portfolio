import { Asset, Entry, EntrySkeletonType } from "contentful";

export type TProject = {
    title: string;
    description: string;
    location: TLocation;
    images: Asset[];
};

export type TLocation = {
  lat: number;
  lon: number;
};

export type ProjectSkeletonType = EntrySkeletonType<TProject>;

export type ProjectEntry = Entry<ProjectSkeletonType>;