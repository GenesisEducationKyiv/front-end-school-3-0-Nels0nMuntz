import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { gql } from "@/shared/api";
import { GET_TRACKS } from "@/entities/track";

interface Options {
  onSuccess: () => void;
}

const DELETE_TRACK = gql(`
mutation DeleteTrack($deleteTrackId: String!) {
  deleteTrack(id: $deleteTrackId)
}
`);

export const useDeleteTrackApolloMutation = ({ onSuccess }: Options) => {
  const [mutateFunction, { loading }] = useMutation(DELETE_TRACK);

  const mutate = (trackId: string) => {
    mutateFunction({
      variables: { deleteTrackId: trackId },
      refetchQueries: [GET_TRACKS],
      onCompleted: () => {
        toast.success("The track has been deleted");
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete track");
      },
    });
  };

  return {
    mutate,
    isPending: loading,
  };
}