import { Checkbox } from "./Checkbox";

type Props = {
  onChange?: (checked: boolean) => void;
};

export const Agreement = ({ onChange }: Props) => {
  return (
    <fieldset>
      <legend>利用規約の同意</legend>
      <label>
        <Checkbox name="agree" onChange={onChange} />
        当サービスの<a href="/terms">利用規約</a>を確認し、これに同意します
      </label>
    </fieldset>
  );
};
