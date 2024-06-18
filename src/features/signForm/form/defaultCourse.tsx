import { FormButton } from "../button/button";
import { FormInput, FormTextarea } from "../input/input";
import { SignForm } from "../signForm";

export function DefaultCourseSignForm() {
  return (
    <SignForm>
      <FormInput required labelText="Imię i nazwisko" />
      <FormInput required type="tel" labelText="Telefon kontaktowy" />
      <FormInput type="email" labelText="Adres email" />
      <FormTextarea labelText="Treść wiadomości" />
      <FormInput type="hidden" value="Kursy i szkolenia" name="typ" />
      <FormButton />
    </SignForm>
  );
}
