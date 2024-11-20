import React, { useState } from "react";
import JSONEditor from "./JSONEditor";
import FormGenerator from "./FormGenerator";

const SplitScreen: React.FC = () => {
  const [schema, setSchema] = useState<any | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4">
        <JSONEditor onSchemaChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 p-4 overflow-auto">
        {schema ? <FormGenerator schema={schema} /> : <p>Enter a valid JSON schema to see the form</p>}
      </div>
    </div>
  );
};

export default SplitScreen;
