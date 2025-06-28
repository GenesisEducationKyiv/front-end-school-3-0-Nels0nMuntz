import { toast } from "sonner";
import { GENRE_API_ERROR_MESSAGES, useGenresApolloQuery } from "@/entities/genres";
import { TrackForm } from "@/shared/ui";
import { unwrapQueryResult } from "@/shared/lib";
import { TrackFormValues } from "@/shared/model";
import { useAddTrackApolloMutation } from "../api/useAddTrackApolloMutation";

interface Props {
  onSubmitted: () => void;
}

export const AddTrackForm: React.FC<Props> = ({ onSubmitted }) => {
  const { data: genresResult } = useGenresApolloQuery();
  const { data = [], error } = unwrapQueryResult(genresResult);
  const { mutate, isPending } = useAddTrackApolloMutation({ onSuccess: onSubmitted });
  const handleSubmit = (values: TrackFormValues) => {
    mutate({
      title: values.title.trim(),
      artist: values.artist.trim(),
      album: values.album?.trim(),
      coverImage: values.coverImage?.trim(),
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
      // actions={
      //   <DialogFooter className="sm:justify-end">
      //     <DialogClose asChild>
      //       <Button type="button" variant="secondary" className="min-w-24">
      //         Close
      //       </Button>
      //     </DialogClose>
      //     <Button type="submit" variant="default" disabled={isPending} className="min-w-24">
      //       {isPending ? <Loader2 className="animate-spin" /> : "Create"}
      //     </Button>
      //   </DialogFooter>
      // }
    />
  );
};
