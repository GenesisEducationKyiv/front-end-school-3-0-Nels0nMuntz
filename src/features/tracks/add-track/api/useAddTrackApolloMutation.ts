import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { CreateTrackRequest, GET_TRACKS } from "@/entities/track";
import { gql } from "@/shared/api";

interface Options {
  onSuccess: () => void;
}

const ADD_TRACK = gql(`
mutation AddTrack($input: CreateTrackInput!) {
  addTrack(input: $input) {
    updatedAt
    title
    slug
    id
    genres
    createdAt
    coverImage
    audioFile
    artist
    album
  }
}
`);

export const useAddTrackApolloMutation = ({ onSuccess }: Options) => {
  const [mutateFunction, { loading }] = useMutation(ADD_TRACK);

  const mutate = (newRecord: CreateTrackRequest) => {
    mutateFunction({
      variables: { input: newRecord },
      refetchQueries: [GET_TRACKS],
      onCompleted: () => {
        toast.success("The track has been added");
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to add track");
      },
    });
  };

  return {
    mutate,
    isPending: loading,
  };
};
