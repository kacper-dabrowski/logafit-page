import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  contentfulContentService,
  ContentfulContentService,
} from "../../../features/content/contentful/service";
import { TextWithImage } from "../../../features/infoPage/textWithImage";

interface PageProps {
  params: { pathname: string };
}

export async function generateStaticParams() {
  const pages = await contentfulContentService.getPages();

  return pages.map((page) => ({ pathname: page.pathname }));
}

export default async function Page({ params }: PageProps) {
  const page = await new ContentfulContentService().getPageByPathname(
    params.pathname,
  );

  if (!page) {
    return notFound();
  }

  if (!page.image) {
    return <div>{documentToReactComponents(page.content)}</div>;
  }

  const imageProps = page.image;

  return (
    <div>
      <TextWithImage
        imageProps={{
          width: 520,
          height: 430,
          src: imageProps.url!,
          alt: imageProps.alt!,
        }}
      >
        {documentToReactComponents(page.content)}
      </TextWithImage>
    </div>
  );
}
