import { body, created, image, title, updated } from "./fields"

const fields = [body, created, updated]

const articles = {
  create: true,
  fields: fields.concat([title, { ...image, media_folder: "./" }]),
  folder: "modules/data/article",
  label: "Articles",
  label_singular: "Article",
  media_folder: "",
  name: "articles",
}

const pages = {
  label: "Pages",
  name: "pages",
  files: [
    {
      label: "Index",
      name: "index",
      file: "modules/data/page/index.md",
      create: true,
      fields,
    },
    {
      label: "About",
      name: "about",
      file: "modules/data/page/about.md",
      create: true,
      fields,
    },
    {
      label: "Articles",
      name: "articles",
      file: "modules/data/page/articles.md",
      create: true,
      fields,
    },
    {
      label: "Licenses",
      name: "licenses",
      file: "modules/data/page/licenses.md",
      create: true,
      fields,
    },
    {
      label: "README",
      name: "readme",
      file: "README.md",
      create: false,
      fields,
    },
  ],
}

export const collections = [articles, pages]
