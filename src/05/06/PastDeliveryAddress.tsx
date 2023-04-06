import { AddressOption } from "./Form";

export const PastDeliveryAddress = ({
  disabled,
  options,
}: {
  disabled?: boolean;
  options: AddressOption[];
}) => {
  return (
    <fieldset disabled={disabled} style={{ opacity: disabled ? 0.3 : 1 }}>
      <legend>過去のお届け先</legend>
      <select name="pastDeliveryAddress">
        {options.map(({ id, ...opt }) => (
          <option key={id} {...opt} />
        ))}
      </select>
    </fieldset>
  );
};
