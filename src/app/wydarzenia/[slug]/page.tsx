import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  AvailableEntity,
  contentfulClientService,
} from "../../../features/contentful/service/service";
import { eventTransformer } from "../../../features/contentful/events/event.transformer";
import { ContentfulWrapper } from "../../../features/contentful/contentfulWrapper";

const BASE_URL = "https://logafit.pl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const events = await contentfulClientService.getEntries(
    AvailableEntity.Events,
  );
  const event = eventTransformer
    .transformMany(events)
    .find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Wydarzenie nie znalezione",
    };
  }

  const typeLabel = event.type === "lato" ? "Letnie" : "Zimowe";

  return {
    title: event.eventName,
    description: `${typeLabel} wydarzenie Logafit: ${event.eventName}. Lokalizacja: ${event.location}. Dla uczestników: ${event.participants}.`,
    openGraph: {
      title: `${event.eventName} | Logafit Toruń`,
      description: `${typeLabel} wydarzenie w ${event.location}. Dla: ${event.participants}.`,
      url: `${BASE_URL}/wydarzenia/${event.slug}`,
      images: event.image
        ? [
            {
              url: `https:${event.image.fields.file.url}`,
              width: event.image.fields.file.details.image.width,
              height: event.image.fields.file.details.image.height,
              alt: event.eventName,
            },
          ]
        : undefined,
    },
    alternates: {
      canonical: `${BASE_URL}/wydarzenia/${event.slug}`,
    },
  };
}

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
