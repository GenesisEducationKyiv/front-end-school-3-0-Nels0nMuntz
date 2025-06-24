import { PropsWithChildren, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui";
import { Track } from "@/entities/track";
import { usePlaylistActions } from "@/shared/model";
import { UploadTrackDropzone } from "./UploadTrackDropzone";
import { useUploadAudioFileMutation } from "../api/useUploadAudioFileMutation";

interface Props extends PropsWithChildren {
  trackId: string;
}

export const UploadTrackDialog: React.FC<Props> = ({ trackId, children }) => {
  const { pushTrackToQueue } = usePlaylistActions();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const onUploaded = (track: Track) => {
    setOpen(false);
    pushTrackToQueue(track);
  };
  const { mutate, isPending } = useUploadAudioFileMutation({
    onSuccess: onUploaded,
  });
  const handleUpload = () => {
    if (!file) return;
    mutate({ file, trackId });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload sound</DialogTitle>
        </DialogHeader>
        <UploadTrackDropzone onChange={setFile} />
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="min-w-24">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="default"
            disabled={isPending || !file}
            className="min-w-24"
            onClick={handleUpload}>
            {isPending ? <Loader2 className="animate-spin" /> : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
