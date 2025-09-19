import { CommonDataType, MessageStatus } from "./Common";

export interface AboutType extends CommonDataType {
  _id: string;
  aboutUs: string;
}

export interface AboutApiResponse extends MessageStatus {
  data: AboutType;
}

export interface TermsConditionType extends CommonDataType {
  _id: string;
  termsCondition: string;
}

export interface TermsConditionApiResponse extends MessageStatus {
  data: TermsConditionType;
}


export interface PrivacyPolicyType extends CommonDataType {
  _id: string;
  privacyPolicy: string;
}

export interface PrivacyPolicyApiResponse extends MessageStatus {
  data: PrivacyPolicyType;
}
