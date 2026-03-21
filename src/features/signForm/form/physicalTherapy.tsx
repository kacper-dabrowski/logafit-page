import { FormButton } from "../button/button";
import { FormInput, FormTextarea } from "../input/input";
import { SignForm } from "../signForm";
import { getMaxDateString } from "./date";

export function PhysicalTherapySignForm() {
  return (
    <SignForm>
      <FormInput required labelText="Imię i nazwisko" />
      <FormInput
        max={getMaxDateString()}
        required
        type="date"
        labelText="Data urodzenia"
      />
      <FormInput required type="tel" labelText="Telefon kontaktowy opiekuna" />
      <FormInput type="email" labelText="Adres email opiekuna" />
      <FormTextarea labelText="Opis schorzenia" />
      <FormInput type="hidden" value="Osteopatia / Fizjoterapia" name="typ" />
      <FormButton />
    </SignForm>
  );
}
