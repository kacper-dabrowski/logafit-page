import { FormButton } from "./button/button";
import { FormInput } from "./input/input";
import styles from "./signForm.module.scss";

export function SignForm() {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        method="POST"
        action="https://submit-form.com/hf6EMLT5W"
      >
        <FormInput
          required
          labelText="Imię"
          placeholder="Wpisz imię uczestnika zajęć"
        />
        <FormInput
          required
          labelText="Nazwisko"
          placeholder="Wpisz nazwisko uczestnika zajęć"
        />
        <FormInput
          max={getMaxDateString()}
          required
          type="date"
          labelText="Data urodzenia"
        />
        <FormInput required type="tel" labelText="Telefon kontaktowy" />
        <FormInput type="email" labelText="Adres email" />
        <FormButton />
      </form>
    </div>
  );
}

function getMaxDateString() {
  const date = new Date();
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${date.getFullYear()}-${formattedMonth}-${date.getDate()}`;
}
