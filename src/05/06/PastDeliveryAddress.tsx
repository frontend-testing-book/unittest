import { AddressOption } from "./Form";
import { Heading } from "./Heading";

export const PastDeliveryAddress = ({
  disabled,
  options,
}: {
  disabled?: boolean;
  options: AddressOption[];
}) => {
  return (
    <fieldset disabled={disabled} style={{ opacity: disabled ? 0.3 : 1 }}>
      <Heading>過去のお届け先</Heading>
      <select name="pastDeliveryAddress">
        {options.map(({ id, ...opt }) => (
          <option key={id} {...opt} />
        ))}
      </select>
    </fieldset>
  );
};
