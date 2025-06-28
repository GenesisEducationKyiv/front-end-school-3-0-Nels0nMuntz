import { Genre } from "@/entities/genres";

export interface CreateTrackRequest {
    title: string;
    artist: string;
    album: string | null;
    genres: Genre[];
    coverImage: string | null;
}