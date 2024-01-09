import { ComponentProps } from "react";

export const TextInput = ({
  labelText,
  inputAttr,
}: {
  labelText: string;
  inputAttr: ComponentProps<"input">;
}) => {
  return (
    <div className="input-wrap">
      <label htmlFor={inputAttr.name}> {labelText}</label>
      <input {...inputAttr} />
    </div>
  );
};
