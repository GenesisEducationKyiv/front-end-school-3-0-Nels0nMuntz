import { api } from "@/shared/api";
import { parseApiResponse } from "@/shared/lib";
import { Track } from "../model/types/track";
import { trackSchema } from "../model/schemas/trackSchema";

export const getTrack = async (slug: string): Promise<Track> => {
    const response = await api.get("tracks", { params: slug });
    return parseApiResponse(response, trackSchema);
}
