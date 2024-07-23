import { FormEventHandler, PropsWithChildren } from "react";
import { Toaster, toast } from "react-hot-toast";
import styles from "./signForm.module.scss";

interface SignFormProps extends PropsWithChildren {}

export function SignForm({ children }: SignFormProps) {
  const onFormSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const data = formDataToObject(new FormData(form));

    await toast.promise(submitForm(data, form), {
      error: "Nie udało się zapisać na zajęcia, spróbuj ponownie później.",
      loading: "Zapisuję...",
      success: "Pomyślnie zapisano na zajęcia.",
    });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onFormSubmit} className={styles.form}>
        {children}
      </form>
      <Toaster />
    </div>
  );
}

function formDataToObject(data: FormData) {
  return Array.from(data.entries()).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

async function submitForm(data: Record<string, any>, form: HTMLFormElement) {
  const url = "https://submit-form.com/hf6EMLT5W";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return;
  }

  form.reset();
}
