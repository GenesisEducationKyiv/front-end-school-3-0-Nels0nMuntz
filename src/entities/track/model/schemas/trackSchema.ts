import { z } from "zod";

export const trackSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  album: z.string().optional().nullable(),
  genres: z.array(z.string()),
  slug: z.string(),
  coverImage: z.string().url().optional().nullable(),
  audioFile: z.string().optional().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
