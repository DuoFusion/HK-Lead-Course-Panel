import { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface LeadFormType extends CommonDataType {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interest: string[];
  preferredLearningMode: string;
  background: string;
  itKnowledgeLevel: string;
  additionalMessage: string;
  priority: 1;
}

export interface LeadFormDataResponse extends PageStatus {
  leadForm_data: LeadFormType[];
}

export interface LeadFormApiResponse extends MessageStatus {
  data: LeadFormDataResponse;
}
