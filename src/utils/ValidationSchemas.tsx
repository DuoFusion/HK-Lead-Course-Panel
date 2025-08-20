import * as Yup from "yup";
import { FieldOptions, FieldTypeMap } from "../types";

export const fieldSchema = <K extends keyof FieldTypeMap>(type: K, label: string = "Field", options?: FieldOptions<FieldTypeMap[K]>): FieldTypeMap[K] => {
  const { required = true, extraRules, minItems } = options || {};

  let schema: FieldTypeMap[K];

  switch (type) {
    case "string":
      schema = Yup.string() as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "boolean":
      schema = Yup.boolean() as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "number":
      schema = Yup.number().typeError(`${label} must be a number`) as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "array":
      schema = Yup.array() as FieldTypeMap[K];
      if (minItems && minItems > 0) {
        schema = (schema as Yup.ArraySchema<any[], Yup.AnyObject>).min(minItems, `${label} is required`) as FieldTypeMap[K];
      }
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.notRequired() as FieldTypeMap[K]);
      break;

    default:
      throw new Error(`Unsupported field type: ${type}`);
  }

  return extraRules ? extraRules(schema) : schema;
};

// ************ Login ***********

export const LoginSchema = Yup.object({
  email: fieldSchema("string", "Email", { extraRules: (s) => s.email("Invalid email address") }),
  password: fieldSchema("string", "Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Password must include at least one special character") }),
});

// ************ Change Password ***********

export const ChangePasswordSchema = Yup.object({
  password: fieldSchema("string", "New Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "New Password must include at least one special character") }),
  confirmPassword: fieldSchema("string", "Confirm Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Confirm Password must include at least one special character") }),
});

// ************ Category ***********

export const CategorySchema = Yup.object({
  name: fieldSchema("string", "Name"),
  priority: fieldSchema("string", "Priority"),
  // title: fieldSchema("string", "Priority", { required: false }),
});

// ************ Workshop ***********

export const WorkshopSchema = Yup.object({
  title: fieldSchema("string", "title"),
  shortDescription: fieldSchema("string", "short Description"),
  date: fieldSchema("string", "date"),
  time: fieldSchema("string", "time"),
  duration: fieldSchema("string", "duration"),
  instructorImage: fieldSchema("array", "instructor Image", { required: false }),
  instructorName: fieldSchema("string", "instructor Name"),
  thumbnailImage: fieldSchema("array", "thumbnail Image", { minItems: 1 }),
  workshopImage: fieldSchema("array", "workshop Image", { minItems: 1 }),
  price: fieldSchema("string", "price", { required: false }),
  category: fieldSchema("string", "category", { required: false }),
  status: fieldSchema("string", "status", { required: false }),
  priority: fieldSchema("string", "Priority"),
  syllabus: fieldSchema("string", "syllabus", { required: false }),
  fullDescription: fieldSchema("string", "full Description", { required: false }),
  features: fieldSchema("boolean", "features", { required: false }),
  faq: Yup.array()
    .of(
      Yup.object().shape({
        question: fieldSchema("string", "FAQ question"),
        answer: fieldSchema("string", "FAQ answer"),
      })
    )
    .min(1, "At least one FAQ is required"),
});

// ************ Courses ***********

export const CoursesSchema = Yup.object({
  title: fieldSchema("string", "Title"),
  subtitle: fieldSchema("string", "Sub Title"),
  background: fieldSchema("string", "Background"),
  duration: fieldSchema("string", "Duration"),
  skillLevel: fieldSchema("string", "Skill Level"),
  price: fieldSchema("string", "Price"),
  totalLectures: fieldSchema("string", "Total Lectures"),
  totalHours: fieldSchema("string", "Total Hours"),
  priority: fieldSchema("string", "Priority"),
  rating: fieldSchema("string", "Rating"),
  whatYouLearn: fieldSchema("string", "What You Learn", { required: false }),
  instructorName: fieldSchema("string", "Instructor Name", { required: false }),
  courseLanguage: fieldSchema("string", "Course Language", { required: false }),
  mrp: fieldSchema("string", "MRP", { required: false }),
  discount: fieldSchema("string", "Discount", { required: false }),
  listOfLectureTitle: fieldSchema("string", "List of Lecture Title", { required: false }),
  shortDescription: fieldSchema("string", "Short Description"),
  listOfLectureDescription: fieldSchema("string", "List of Lecture Description", { required: false }),
  instructorImage: fieldSchema("array", "Instructor Image", { required: false }),
  courseImage: fieldSchema("array", "Course Image", { minItems: 1 }),
  features: fieldSchema("boolean", "Features", { required: false }),
  faq: Yup.array()
    .of(
      Yup.object().shape({
        question: fieldSchema("string", "FAQ Question", { required: false }),
        answer: fieldSchema("string", "FAQ Answer", { required: false }),
      })
    )
    .min(1, "At least one FAQ is required"),
});
