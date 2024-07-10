export const domain = "http://localhost:3000";
export interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: any;
}
export interface IPosts {
  _id: string;
  title: string;
  description: String;
  content: string;
  thumbnail: string;
  categories: ICategory[];
  createAt: string;
}
export interface IUser {
  _id: string;
  name: string;
  avatar: string;
  email: string;
  password: string;
  createdAt: string;
  role: number;
  status: number;
  likes: ISinger[];
}
export interface ISinger {
  _id: string;
  name: string;
  story: string;
  avatar: string;
  followers: IUser[];
  createdAt: any;
}
export interface ISong {
  _id: string;
  name: string;
  song: string;
  lyric: string;
  singers:ISinger[];
  comments: { _id: string };
  images: string;
  categories:ICategory[];
  views: number;
  description: string;
  likes:number
  createdAt: any;
}