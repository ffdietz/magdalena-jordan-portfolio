import { Asset } from "contentful";

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
