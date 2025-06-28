import { toast } from "sonner";
import { GENRE_API_ERROR_MESSAGES, useGenresApolloQuery } from "@/entities/genres";
import { Track } from "@/entities/track";
import { TrackForm } from "@/shared/ui";
import { unwrapQueryResult } from "@/shared/lib";
import { TrackFormValues } from "@/shared/model";
import { useEditTrackApolloMutation } from "../api/useEditTrackApolloMutation";

interface Props {
  track: Track;
  onUpdated: () => void;
}

export const EditTrackForm: React.FC<Props> = ({ track, onUpdated }) => {
  const { data: genresResult } = useGenresApolloQuery();
  const { data = [], error } = unwrapQueryResult(genresResult);
  const { mutate, isPending } = useEditTrackApolloMutation({ onSuccess: onUpdated });
  const handleSubmit = (values: TrackFormValues) => {
    mutate({
      id: track.id,
      title: values.title.trim(),
      artist: values.artist.trim(),
      album: values.album ? values.album.trim() : null,
      coverImage: values.coverImage ? values.coverImage.trim() : null,
      genres: values.genres.map(({ value }) => value),
    });
  };

  if (error) {
    toast.error(GENRE_API_ERROR_MESSAGES[error.type as keyof typeof GENRE_API_ERROR_MESSAGES]);
  }

  return (
    <TrackForm
      onSubmit={handleSubmit}
      genres={data}
      isSubmitting={isPending}
      values={{
        title: track.title,
        artist: track.artist,
        album: track.album,
        genres: track.genres.map((item) => ({ label: item, value: item })),
        coverImage: track.coverImage,
      }}
    />
  );
};
