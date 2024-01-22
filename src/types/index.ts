import { Asset } from "contentful";

export type TProject = {
  index?: string;
  title?: string;
  description?: string;
  location?: TypeLocation;
  images?: Asset[];
};

export type TypeLocation = {
  lat: number;
  lon: number;
};
