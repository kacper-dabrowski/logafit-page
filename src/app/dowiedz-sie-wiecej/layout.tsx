import { PropsWithChildren } from "react";
import { ReturnLink } from "@/features/infoPage/returnLink";

export default function LearnMoreLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <ReturnLink />
      <div>{children}</div>
    </section>
  );
}
