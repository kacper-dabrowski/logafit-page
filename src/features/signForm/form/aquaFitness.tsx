import { FormButton } from "../button/button";
import { FormInput } from "../input/input";
import { FormSelect } from "../select/select";
import { SignForm } from "../signForm";

export function AquaFitnessClassesSignForm() {
  return (
    <SignForm>
      <FormInput required labelText="Imię i nazwisko" />
      <FormInput required type="tel" labelText="Telefon kontaktowy" />
      <FormInput type="email" labelText="Adres email" />
      <FormSelect
        required
        options={["Toruń UCS UMK", "Toruń Copernicus Hotel"]}
        labelText="Miejsce zajęć"
      />

      <FormInput type="hidden" value="Zajęcia aqua fitness" name="typ" />
      <FormButton />
    </SignForm>
  );
}
