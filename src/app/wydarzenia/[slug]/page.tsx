import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { redirect } from "next/navigation";
import {
  AvailableEntity,
  contentfulClientService,
} from "../../../features/contentful/service/service";
import { eventTransformer } from "../../../features/contentful/events/event.transformer";
import { ContentfulWrapper } from "../../../features/contentful/contentfulWrapper";

export async function generateStaticParams() {
  const events = eventTransformer.transformMany(
    await contentfulClientService.getEntries(AvailableEntity.Events),
  );

  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const events = await contentfulClientService.getEntries(
    AvailableEntity.Events,
  );
  const { slug } = await params;
  const event = eventTransformer
    .transformMany(events)
    .find((e) => e.slug === slug);

  if (!event) {
    return redirect("/");
  }

  return (
    <ContentfulWrapper>
      {documentToReactComponents(event.details, {
        preserveWhitespace: true,
      })}
    </ContentfulWrapper>
  );
}
