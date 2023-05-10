import { Heading } from "./Heading";

type Props = { onChange: (flag: boolean) => void };

export const RegisterDeliveryAddress = ({ onChange }: Props) => {
  return (
    <fieldset>
      <Heading>新しいお届け先を登録しますか？</Heading>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={0}
          onChange={() => {
            onChange(false);
          }}
        />
        いいえ
      </label>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={1}
          onChange={() => {
            onChange(true);
          }}
        />
        はい
      </label>
    </fieldset>
  );
};
