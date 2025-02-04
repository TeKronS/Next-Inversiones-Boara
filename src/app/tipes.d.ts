export interface CardType {
  _id: string;
  title: string;
  urlImage: string | StaticImageData;
}

export interface ReviewType {
  _id: string;
  urlImage: string | StaticImageData;
  date: string;
}
