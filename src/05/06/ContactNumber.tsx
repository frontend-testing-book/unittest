import { Heading } from "./Heading";

export const ContactNumber = () => {
  return (
    <fieldset>
      <Heading>連絡先</Heading>
      <div>
        <label>
          電話番号
          <input type="text" name="phoneNumber" />
        </label>
      </div>
      <div>
        <label>
          お名前
          <input type="text" name="name" />
        </label>
      </div>
    </fieldset>
  );
};
