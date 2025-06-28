import { GET_TRACKS } from "@/entities/track";
import { toast } from "sonner";
import { gql } from "@/shared/api";
import { useMutation } from "@apollo/client";

interface Options {
  onSuccess: () => void;
}

const DELETE_FILE = gql(`
mutation DeleteTrackFile($deleteTrackFileId: String!) {
  deleteTrackFile(id: $deleteTrackFileId) {
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

export const useDeleteFileApolloMutation = ({ onSuccess }: Options) => {
  const [mutateFunction, { loading }] = useMutation(DELETE_FILE);

  const mutate = (trackId: string) => {
    mutateFunction({
      variables: { deleteTrackFileId: trackId },
      refetchQueries: [GET_TRACKS],
      onCompleted: () => {
        toast.success("The file has been deleted");
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete the file");
      },
    });
  };

  return {
    mutate,
    isPending: loading,
  };
};
