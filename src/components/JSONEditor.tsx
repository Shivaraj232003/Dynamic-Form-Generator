import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { validateJSON } from "../utils/validation";

interface Props {
  onSchemaChange: (schema: any) => void;
}

const JSONEditor: React.FC<Props> = ({ onSchemaChange }) => {
  const [error, setError] = useState("");

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
    const [isValid, parsed] = validateJSON(value);
    if (isValid) {
      setError("");
      onSchemaChange(parsed);
    } else {
      setError("Invalid JSON schema");
    }
  };

  return (
    <div className="h-full">
      <Editor
        height="100%"
        defaultLanguage="json"
        defaultValue={`{
  "formTitle": "Your Form Title",
  "formDescription": "Your form description",
  "fields": []
}`}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
