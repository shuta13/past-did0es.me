export interface IResponse {
  data: {
    id: number;
    img: string;
    pathname: string;
    info: { [key: string]: string };
  }[];
}
