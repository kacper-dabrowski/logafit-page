import React from "react";
import { Paragraph } from "../shared/typography/paragraph";
import styles from "./list.module.scss";

interface ListProps {
  items: ListItemProps[] | string[];
}

interface ListItemProps {
  content: string;
  lineBreak?: boolean;
  title?: string;
}

export function List({ items }: ListProps) {
  return <ul className={styles.list}>{items.map(renderTextList)}</ul>;
}

function renderTextList(item: ListItemProps | string) {
  if (typeof item === "string") {
    return (
      <li className={styles.listItem} key={item}>
        <Paragraph>{item}</Paragraph>
      </li>
    );
  }
  return (
    <React.Fragment key={item.content}>
      <li className={styles.listItem}>
        <Paragraph>
          {item.title ? (
            <span className={styles.bold}>{item.title} </span>
          ) : null}
          {item.content}
        </Paragraph>
      </li>
      {item.lineBreak ? <br /> : null}
    </React.Fragment>
  );
}
