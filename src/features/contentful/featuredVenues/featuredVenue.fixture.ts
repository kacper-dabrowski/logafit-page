import { FeaturedVenue } from "./featuredVenue.transformer";

export const fakeFeaturedVenue: FeaturedVenue = {
  order: 1,
  name: "",
  backgroundColor: "#fff",
  textColor: "#000",
  image: {
    fields: {
      file: {
        contentType: "",
        details: {
          image: {
            height: 200,
            width: 100,
          },
        },
        url: "https://imageurl.com",
        title: "Title",
        description: "Description",
      },
    },
  },
};
