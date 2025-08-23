// export function buildPayload<T extends Record<string, any>>(values: T, initialData?: Partial<T>): Partial<T> {
//   const payload: Partial<T> = {};

//   Object.entries(values).forEach(([key, value]) => {
//     const initialValue = initialData?.[key as keyof T];

//     const normalizedValue = value === "" || value === undefined ? null : value;

//     if (key === "image") {
//       const newImage = (value as any)?.[0] || null;
//       if (newImage !== initialValue) {
//         (payload as any)[key] = newImage;
//       }
//     } else {
//       if (normalizedValue !== initialValue) {
//         (payload as any)[key] = normalizedValue;
//       }
//     }
//   });

//   return payload;
// }

// utils/formHelpers.ts

// -------------------------------------------------------------------------------------------

// export function buildPayload<T extends Record<string, any>>(values: T, initialData?: Partial<T>): Partial<T> {
//   const payload: Partial<T> = {};

//   Object.entries(values).forEach(([key, value]) => {
//     const initialValue = initialData?.[key as keyof T];

//     // normalize "" and undefined → null
//     const normalizedValue = value === "" || value === undefined ? null : value;

//     // image fields are arrays → send first item
//     if (key.toLowerCase().includes("image") && Array.isArray(value)) {
//       const newImage = value[0] || null;
//       if (newImage !== initialValue) {
//         (payload as any)[key] = newImage;
//       }
//     }
//     // faq or other arrays → compare directly
//     else if (Array.isArray(value)) {
//       if (JSON.stringify(value) !== JSON.stringify(initialValue)) {
//         (payload as any)[key] = value;
//       }
//     }
//     // normal fields
//     else {
//       if (normalizedValue !== initialValue) {
//         (payload as any)[key] = normalizedValue;
//       }
//     }
//   });

//   return payload;
// }

//--------------------------------------------------------------------------------------------------------------

export function buildPayload<T extends Record<string, any>>(values: T, initialData?: Partial<T>): Partial<T> {
  const payload: Partial<T> = {};
  const socialKeys = ["instagram", "facebook", "linkedin", "x","whatsapp"];
  const socialMedia: Record<string, string | null> = {};

  function normalize(val: any) {
    return val === "" || val === undefined ? null : val;
  }

  function processField(key: string, value: any, initialValue: any, target: any) {
    const normalizedValue = normalize(value);

    // image fields (array -> string)
    if ((key.toLowerCase().includes("image") || key === "image") && Array.isArray(value)) {
      const newImage = value[0] || null;
      if (newImage !== initialValue) target[key] = newImage;
    }
    // array fields (faq, testimonials, lectures etc.)
    else if (Array.isArray(value)) {
      const newArr = value.map((item) =>
        typeof item === "object" && item !== null ? buildPayload(item, initialValue) : item
      );
      if (JSON.stringify(newArr) !== JSON.stringify(initialValue)) target[key] = newArr;
    }
    // social media keys
    else if (socialKeys.includes(key)) {
      socialMedia[key] = normalizedValue as string | null;
    }
    // normal fields
    else {
      if (normalizedValue !== initialValue) target[key] = normalizedValue;
    }
  }

  Object.entries(values).forEach(([key, value]) => {
    const initialValue = initialData?.[key as keyof T];
    processField(key, value, initialValue, payload);
  });

  if (Object.values(socialMedia).some((val) => val !== null)) {
    (payload as any).socialMedia = socialMedia;
  }

  return payload;
}
