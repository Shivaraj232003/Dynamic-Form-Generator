import { render, screen } from "@testing-library/react";
import FormGenerator from "../components/FormGenerator";

test("renders form title and description", () => {
  const schema = { formTitle: "Test Form", formDescription: "Fill this out", fields: [] };
  render(<FormGenerator schema={schema} />);
  expect(screen.getByText("Test Form")).toBeInTheDocument();
  expect(screen.getByText("Fill this out")).toBeInTheDocument();
});
