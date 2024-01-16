import { Asset } from "contentful";

export type TProject = {
  title: string;
  description: string;
  location: TypeLocation;
  images: Asset[];
};

export type TypeLocation = {
  lat: number;
  lon: number;
};
