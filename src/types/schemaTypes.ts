export interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    message?: string;
    minLength?: number;
    maxLength?: number;
  };
  defaultValue?: string;
  dependsOn?: string;
}

export interface JSONSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}
