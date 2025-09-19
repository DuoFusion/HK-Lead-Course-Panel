import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface BlogFormValues {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string | string[];
  thumbnail?: string | string[];
  priority?: number;
}

export interface BlogType extends BlogFormValues, CommonDataType {
  _id: string;
}

export interface BlogDataResponse extends PageStatus {
  blog_data: BlogType[];
}

export interface BlogApiResponse extends MessageStatus {
  data: BlogDataResponse;
}
