const fields = [
  { label: "Title", name: "title", widget: "string" },
  { label: "Last Updated", name: "updated", widget: "datetime" },
  { label: "Publish Date", name: "created", widget: "datetime" },
  { label: "Body", name: "body", widget: "markdown" },
]

export const pages = {
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
  ],
}
