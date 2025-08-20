import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface CoursesFormValues {
  title?: string;
  subtitle?: string;
  background?: string;
  duration?: string;
  skillLevel?: string;
  price?: string;
  totalLectures?: string;
  totalHours?: string; 
  priority?: string;
  rating?: string;
  whatYouLearn?: string;
  instructorName?: string;
  courseLanguage?: string;
  mrp?: string;
  discount?: string;
  listOfLectureTitle?: string;
  shortDescription?: string;
  listOfLectureDescription?: string;
  instructorImage?: string | string[];
  courseImage?: string | string[]; 
  faq: FAQ[];
  features?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface CoursesType extends CoursesFormValues, CommonDataType {
  _id: string;
  features: boolean;
}

export interface CoursesDataResponse extends PageStatus {
  course_data: CoursesType[];
}

export interface CoursesApiResponse extends MessageStatus {
  data: CoursesDataResponse;
}
