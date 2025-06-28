import { z } from "zod";

export const trackSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string().nullable(),
  genres: z.array(z.string()),
  slug: z.string(),
  coverImage: z.string().url().nullable(),
  audioFile: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
