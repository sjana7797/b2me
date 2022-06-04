export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      title: "Products",
      name: "products",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    },
    {
      name: "largeText1",
      title: "LargeText1",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "saleTime",
      title: "SaleTime",
      type: "string",
    },
  ],
};
