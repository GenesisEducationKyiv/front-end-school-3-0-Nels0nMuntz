import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { EditTrackRequest, GET_TRACKS } from "@/entities/track";
import { gql } from "@/shared/api";

interface Options {
  onSuccess: () => void;
}

const EDIT_TRACK = gql(`
mutation UpdateTrack($input: UpdateTrackInput!) {
  updateTrack(input: $input) {
    id
    title
    artist
    album
    genres
    slug
    coverImage
    audioFile
    createdAt
    updatedAt
  }
}
`);

export const useEditTrackApolloMutation = ({ onSuccess }: Options) => {
  const [mutateFunction, { loading }] = useMutation(EDIT_TRACK);

  const mutate = (newRecord: EditTrackRequest) => {
    mutateFunction({
      variables: { input: newRecord },
      refetchQueries: [GET_TRACKS],
      onCompleted: () => {
        toast.success("The track has been updated");
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to update track");
      },
    });
  };

  return {
    mutate,
    isPending: loading,
  };
};
