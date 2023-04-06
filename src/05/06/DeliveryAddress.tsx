export const DeliveryAddress = ({ title = "お届け先" }: { title?: string }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label>
          郵便番号
          <input type="text" name="postalCode" placeholder="167-0051" />
        </label>
      </div>
      <div>
        <label>
          都道府県
          <input type="text" name="prefectures" placeholder="東京都" />
        </label>
      </div>
      <div>
        <label>
          市区町村
          <input type="text" name="municipalities" placeholder="杉並区荻窪1" />
        </label>
      </div>
      <div>
        <label>
          番地番号
          <input type="text" name="streetNumber" placeholder="00-00" />
        </label>
      </div>
    </fieldset>
  );
};
