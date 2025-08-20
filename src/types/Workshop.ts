import { CategoryType } from "./Category";
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
  features?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface WorkshopType extends Omit<Required<WorkshopFormValues>, "category">, CommonDataType {
  _id: string;
  category: CategoryType;
  features: boolean;
}

export interface WorkshopDataResponse extends PageStatus {
  workshop_data: WorkshopType[];
}

export interface WorkshopApiResponse extends MessageStatus {
  data: WorkshopDataResponse;
}
