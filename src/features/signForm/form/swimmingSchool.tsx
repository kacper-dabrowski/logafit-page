import { Paragraph } from "../../shared/typography/paragraph";
import { FormButton } from "../button/button";
import { FormInput, FormTextarea } from "../input/input";
import { FormSelect } from "../select/select";
import { SignForm } from "../signForm";
import { getMaxDateString } from "./date";

export function SwimmingSchoolSignForm() {
  return (
    <SignForm>
      <Paragraph>Uczestnik:</Paragraph>
      <FormInput required labelText="Imię i nazwisko" />
      <FormInput
        max={getMaxDateString()}
        required
        type="date"
        labelText="Data urodzenia"
      />
      <Paragraph>Opiekun:</Paragraph>
      <FormInput required type="tel" labelText="Telefon kontaktowy" />
      <FormInput type="email" labelText="Adres email" />
      <FormSelect
        required
        options={[
          "indywidualnie",
          "pływanie niemowląt",
          "nauka pływania",
          "doskonalenie pływania",
        ]}
        labelText="Rodzaj zajęć"
      />
      <FormTextarea labelText="Treść wiadomości" />
      <FormButton />
    </SignForm>
  );
}
