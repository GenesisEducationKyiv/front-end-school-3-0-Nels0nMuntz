import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { gql } from "@/shared/api";
import { GET_TRACKS } from "@/entities/track";

interface Options {
  onSuccess: () => void;
}

const DELETE_TRACKS = gql(`
mutation DeleteTracks($ids: [String!]!) {
  deleteTracks(ids: $ids) {
    success
    failed
  }
}
`);

export const useDeleteMultipleTracksApolloMutation = ({
  onSuccess,
}: Options) => {
  const [mutateFunction, { loading }] = useMutation(DELETE_TRACKS);

  const mutate = (ids: string[]) => {
    mutateFunction({
      variables: { ids },
      refetchQueries: [GET_TRACKS],
      onCompleted: (response) => {
        console.log({ response });
        if (response?.deleteTracks?.failed.length) {
          toast.warning("Not all tracks have been deleted");
        } else {
          toast.success("Tracks have been deleted");
        }
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete the tracks");
      },
    });
  };

  return {
    mutate,
    isPending: loading,
  };
};
