export const navigation = {
  label: "Navigation",
  name: "navigation",
  files: [
    {
      label: "Navigation Items",
      name: "navigation-items",
      file: "modules/data/navigation-items.md",
      create: true,
      fields: [
        { label: "Last Updated", name: "updated", widget: "datetime" },
        { label: "Publish Date", name: "created", widget: "datetime" },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
}
