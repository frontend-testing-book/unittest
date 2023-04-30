import { useState } from "react";

type Props = {
  name: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({ name, defaultChecked = false, onChange }: Props) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        style={{ display: "none" }}
        onChange={() => {
          onChange?.(!checked);
        }}
      />
      <span
        style={{
          display: "inline-block",
          textAlign: "center",
          width: "24px",
          height: "24px",
          borderRadius: "4px",
          cursor: "pointer",
          color: checked ? "#fff" : "#fff",
          backgroundColor: checked ? "#1EA7FD" : "#ccc",
        }}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        ✔︎
      </span>
    </span>
  );
};
