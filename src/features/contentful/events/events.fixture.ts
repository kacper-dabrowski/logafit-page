import { Event } from "./event.transformer";

export const eventFixture: Event = {
  eventName: "Event Name",
  type: "lato",
  location: "Location",
  image: {
    fields: {
      file: {
        contentType: "image/jpeg",
        details: {
          image: {
            height: 100,
            width: 100,
          },
        },
        url: "https://example.com/image.jpg",
        title: "Image Title",
        description: "Image Description",
      },
    },
  },
  order: 0,
  emoji: "🏊‍♂️",
  color: "#000000",
  dates: ["30 czerwca - 4 lipca 2025"],
  participants: "Participants",
  accentColor: "#000000",
  slug: "event-name",
  details: undefined,
};
