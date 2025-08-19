import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface WorkshopFormValues {
  title?: string;
  shortDescription?: string;
  date?: string;
  time?: string;
  duration?: string;
  instructorImage?: string | string[];
  instructorName?: string;
  thumbnailImage?: string | string[];
  workshopImage?: string | string[];
  price?: string;
  category?: string;
  status?: string;
  priority?: string;
  fullDescription?: string;
  syllabus?: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string;
}

export interface WorkshopType extends WorkshopFormValues, CommonDataType {
  _id: string;
  features: boolean;
}

export interface WorkshopDataResponse extends PageStatus {
  workshop_data: WorkshopType[];
}

export interface WorkshopApiResponse extends MessageStatus {
  data: WorkshopDataResponse;
}
