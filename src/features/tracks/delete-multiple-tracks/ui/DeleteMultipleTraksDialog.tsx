import { PropsWithChildren, useState } from "react";
import { Loader2 } from "lucide-react";
import { useSelections } from "@/shared/model";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@/shared/ui";
import { useDeleteMultipleTracksMutation } from "../api/useDeleteMultipleTracksMutation";
import {
  usePlaylistCurrentTrackIndex,
  usePlaylistTracks,
  usePlaylistActions,
  useSettingsActions
} from "@/shared/model";


export const DeleteMultipleTracksDialog: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const tracks = usePlaylistTracks();
  const trackIndex = usePlaylistCurrentTrackIndex();
  const { pushTrackToQueue } = usePlaylistActions();
  const { setSelections } = useSettingsActions();
  const selection = useSelections();
  const trackIds = Object.keys(selection);
  
  const onDeleted = () => {
    setSelections({});
    setOpen(false);
  }

  const { mutate, isPending } = useDeleteMultipleTracksMutation({ onSuccess: onDeleted });
  const handleDelete = () => {
    const currentTrack = tracks[trackIndex];
    if (!currentTrack) {
      mutate(trackIds);
      return;
    };
    if (trackIds.includes(currentTrack.id)) {
      const nextTrack = tracks.find((track) => !trackIds.includes(track.id));
      if (nextTrack) {
        pushTrackToQueue(nextTrack);
      }
    } else {
      pushTrackToQueue(currentTrack);
    }
    mutate(trackIds);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the selected tracks from your
            library.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" className="bg-white min-w-24">
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="min-w-24"
            data-testid="bulk-delete-button"
          >
            {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
