export const getMerch = async () => {
    const data = {
        "operationName":"StoreBasicProducts",
        "variables":{
            "slug":"coreyindahouse27s-store",
            "page":1,
            "region":"USA",
            "currency":"USD",
            "items":12
        },
        // "query": "query StoreBasicProducts($slug: String!, $page: Float, $region: String, $currency: String, $items: Float, $collection: String, $visibility: ProductVisibilityInput) {}"
        "query":"query StoreBasicProducts($slug: String!, $page: Float, $region: String, $currency: String, $items: Float, $collection: String, $visibility: ProductVisibilityInput) {\n  products(\n    slug: $slug\n    page: $page\n    region: $region\n    currency: $currency\n    items: $items\n    collection: $collection\n    visibility: $visibility\n  ) {\n    ...BasicProductsFragment\n    ...ProductsQueryErrorResultFragment\n    __typename\n  }\n}\n\nfragment ProductsMetaFragment on Products {\n  collection\n  count\n  total_count\n  per_page\n  page\n  next\n  __typename\n}\n\nfragment AdditionalImageFragment on AdditionalImage {\n  side\n  src\n  __typename\n}\n\nfragment ProductCollectionFragment on ProductCollection {\n  id\n  name\n  slug\n  __typename\n}\n\nfragment BasicProductFragment on BasicProduct {\n  imageUrl\n  additionalImages {\n    ...AdditionalImageFragment\n    __typename\n  }\n  id\n  name\n  price\n  productGroupName\n  productName\n  url\n  listingSlug\n  orders\n  collections {\n    ...ProductCollectionFragment\n    __typename\n  }\n  listingId\n  __typename\n}\n\nfragment BasicProductsFragment on Products {\n  ...ProductsMetaFragment\n  basicProducts {\n    ...BasicProductFragment\n    __typename\n  }\n  __typename\n}\n\nfragment ProductsQueryErrorResultFragment on ProductsQueryErrorResult {\n  errors {\n    store\n    __typename\n  }\n  __typename\n}"
    };
    try {
        const res = await fetch("https://graph.teespring.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });

        const result = await res.json();
        return result.data.products;
    } catch (error) {
        console.error("Error making POST request:", error);
    }
}