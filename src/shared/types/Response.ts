export interface Response {
  data: {
    id: number;
    img: string;
    pathname: string;
    info: { [key: string]: string };
  }[];
}
