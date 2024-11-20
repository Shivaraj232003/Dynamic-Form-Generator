import React from "react";
import { useForm } from "react-hook-form";
import { JSONSchema } from "../types/schemaTypes";

interface Props {
  schema: JSONSchema;
}

const FormGenerator: React.FC<Props> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>

      {schema.fields.map((field) => (
        <div key={field.id} className="space-y-1">
          <label htmlFor={field.id} className="block font-medium">
            {field.label} {field.required && "*"}
          </label>
          {field.type === "text" && (
            <input
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="border p-2 w-full"
            />
          )}
          {/* Handle other field types like email, select, radio, etc. */}
          {errors[field.id] && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
