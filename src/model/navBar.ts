export type ContentType = {
  title: string;
  description?: string;
  listOfDescription?: string[];
  listOfImageDescription?: {
    title: string;
    image: string;
    description: string;
  }[];
  listOfImage?: string[];
};
