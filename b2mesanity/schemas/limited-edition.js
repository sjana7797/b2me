export default {
  name: "limited",
  type: "document",
  title: "Limited Edition",
  fields: [
    {
      title: "Products",
      name: "products",
      type: "reference",
      to: [{ type: "product" }],
    },
  ],
};
