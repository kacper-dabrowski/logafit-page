import { notFound } from "next/navigation";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { INLINES } from "@contentful/rich-text-types";
import { AvailableEntity, contentfulClientService } from "../service/service";
import { pageTransformer } from "./page.transformer";
import { BreadcrumbItem, BreadcrumbSchema } from "../../seo/breadcrumbSchema";
import { ServiceSchema } from "../../seo/serviceSchema";
import { ContentfulWrapper } from "../contentfulWrapper";
import styles from "./page.module.scss";

const BASE_URL = "https://logafit.pl";

const richTextOptions: Options = {
  preserveWhitespace: true,
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: ({ data }, children) => {
      const url = data.target?.fields?.file?.url;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export async function ContentfulPage({
  slug,
  breadCrumbItems,
}: {
  slug: string;
  breadCrumbItems: BreadcrumbItem[];
}) {
  const content = await contentfulClientService.getEntries(
    AvailableEntity.Pages,
  );
  const page = pageTransformer
    .transformMany(content)
    .find((p) => p.slug === slug);

  if (!page) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <BreadcrumbSchema items={breadCrumbItems} />
      <ServiceSchema
        serviceName={page?.title}
        serviceDescription={page?.serviceDescription}
        serviceUrl={`${BASE_URL}/${slug}`}
        image={page?.heroImage?.fields.file.url}
        offers={[
          { name: "Zajęcia grupowe", price: "600", description: "10 wejść" },
        ]}
      />
      <h2 className={styles.heading}>{page?.title}</h2>
      <div
        className={styles.heroImage}
        style={{
          aspectRatio: `${page.heroImage.fields.file.details.image.width} / ${page.heroImage.fields.file.details.image.height}`,
        }}
      >
        <Image
          src={page?.heroImage?.fields.file.url}
          alt={page?.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      <ContentfulWrapper>
        {documentToReactComponents(page?.content, richTextOptions)}
      </ContentfulWrapper>
    </div>
  );
}
