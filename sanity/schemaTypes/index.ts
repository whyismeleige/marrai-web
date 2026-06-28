import { author } from "./author";
import { blockContent } from "./blockContent";
import { category } from "./category";
import { callout } from "./objects/callout";
import { codeBlock } from "./objects/codeBlock";
import { externalLink } from "./objects/externalLink";
import { seo } from "./objects/seo";
import { post } from "./post";

export const schemaTypes = [
  author,
  category,
  post,
  blockContent,
  seo,
  callout,
  codeBlock,
  externalLink,
];
