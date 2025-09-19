import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface AnnouncementFormValues {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string | string[];
  thumbnail?: string | string[];
  priority?: number;
}

export interface AnnouncementType extends AnnouncementFormValues, CommonDataType {
  _id: string;
}

export interface AnnouncementDataResponse extends PageStatus {
  announcement_data: AnnouncementType[];
}

export interface AnnouncementApiResponse extends MessageStatus {
  data: AnnouncementDataResponse;
}
