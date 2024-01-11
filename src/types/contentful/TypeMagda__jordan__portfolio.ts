import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeMagda__jordan__portfolioFields {
    title?: EntryFields.Symbol;
    location?: EntryFields.Location;
    description?: EntryFields.Text;
    images?: Asset[];
}

export type TypeMagda__jordan__portfolio = Entry<TypeMagda__jordan__portfolioFields>;
