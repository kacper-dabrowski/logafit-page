"use client";

import { useNavigation } from "../../features/navigation/useNavigation";
import { OfferButton } from "../../features/offer/button/button";
import { PrimaryHeader } from "../../features/shared/typography/headers";
import { AquaFitnessClassesSignForm } from "../../features/signForm/form/aquaFitness";
import { DefaultCourseSignForm } from "../../features/signForm/form/defaultCourse";
import { PhysicalTherapySignForm } from "../../features/signForm/form/physicalTherapy";
import { SwimmingSchoolSignForm } from "../../features/signForm/form/swimmingSchool";
import { Tab } from "../../features/signForm/tabs";
import styles from "./page.module.scss";

const formToTabMap: Record<Tab, JSX.Element> = {
  [Tab.AquaFitnessClasses]: <AquaFitnessClassesSignForm />,
  [Tab.SwimmingSchool]: <SwimmingSchoolSignForm />,
  [Tab.PhysicalTherapy]: <PhysicalTherapySignForm />,
  [Tab.DefaultCourse]: <DefaultCourseSignForm />,
};

export default function Page() {
  const { getNavigationProps, activeTab } = useNavigation(Tab.SwimmingSchool);
  return (
    <div>
      <PrimaryHeader>
        Wybierz aktywność, na którą chcesz się zapisać
      </PrimaryHeader>
      <div className={styles.buttonsWrapper}>
        <OfferButton variant="blue" {...getNavigationProps(Tab.SwimmingSchool)}>
          Szkoła pływania
        </OfferButton>
        <OfferButton
          variant="blue"
          {...getNavigationProps(Tab.AquaFitnessClasses)}
        >
          Aqua Fitness
        </OfferButton>
        <OfferButton
          variant="blue"
          {...getNavigationProps(Tab.PhysicalTherapy)}
        >
          Osteopatia
        </OfferButton>
        <OfferButton variant="blue" {...getNavigationProps(Tab.DefaultCourse)}>
          Kursy i szkolenia
        </OfferButton>
      </div>

      <div className={styles.formContainer}>{formToTabMap[activeTab]}</div>
    </div>
  );
}
