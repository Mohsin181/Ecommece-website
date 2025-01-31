import { groq } from "next-sanity";


export const allProducts = groq `
*[_type == "product"]{
  _id,
  title,
  _type,
  "productImage": productImage.asset->url,
  tags,
  price,
  description
}
`;
export const four = groq `*[_type == "product"][0..3]`;
