import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface SocialLinks {
  experience?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
}

export interface MentorsFormValues extends SocialLinks {
  image?: string | string[];
  name?: string;
  role?: string;
  x?: string;
  priority?: number;
}

export interface MentorsType extends MentorsFormValues, CommonDataType {
  _id: string;
  socialLinks: SocialLinks;
}

export interface MentorsDataResponse extends PageStatus {
  mentors_data: MentorsType[];
}

export interface MentorsApiResponse extends MessageStatus {
  data: MentorsDataResponse;
}
