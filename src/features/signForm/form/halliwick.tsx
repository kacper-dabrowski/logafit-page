import { FormButton } from "../button/button";
import { FormInput, FormTextarea } from "../input/input";
import { SignForm } from "../signForm";
import { getMaxDateString } from "./date";

export function HalliwickSignForm() {
  return (
    <SignForm>
      <FormInput required labelText="Imię i nazwisko" />
      <FormInput
        max={getMaxDateString()}
        required
        type="date"
        labelText="Data urodzenia"
      />
      <FormInput required type="tel" labelText="Telefon kontaktowy" />
      <FormInput type="email" labelText="Adres email" />
      <FormTextarea labelText="Treść wiadomości" />
      <FormInput type="hidden" value="Zajęcia aqua fitness" name="typ" />
      <FormButton />
    </SignForm>
  );
}
