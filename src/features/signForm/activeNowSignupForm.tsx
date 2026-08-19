"use client";

import { useEffect, useRef } from "react";
import styles from "./activeNowSignupForm.module.scss";

const ACTIVE_NOW_SCRIPT_URL =
  "https://app.activenow.io/external/signup_form/load_by_js?age_group=&city_id=&code=2362917b677035a47f17909310e0bd03&discipline_id=&proficiency_id=&school_id=1255&signup_form_id=102923&venue_id=&zz=";

export function ActiveNowSignupForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized.current) {
      return;
    }

    isInitialized.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = ACTIVE_NOW_SCRIPT_URL;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={containerRef}
        className="activenow-form-container activenow-form-102923-container"
      >
        <div className={styles.loader}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.activenow.io/assets/ripple.gif"
            width="100"
            height="100"
            alt="Ładowanie formularza zapisów"
          />
        </div>
      </div>
    </div>
  );
}
