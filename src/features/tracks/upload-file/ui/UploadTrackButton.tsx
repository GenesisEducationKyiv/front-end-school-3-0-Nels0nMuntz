import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/shared/ui";
import { Track } from "@/entities/track";
import { cn } from "@/shared/lib";
import type { Props as UploadTrackDialogProps } from "./UploadTrackDialog";
import { usePlaylistActions } from "@/shared/model";

interface Props {
  track: Track;
}

export const UploadTrackButton: React.FC<Props> = ({ track }) => {
  const { pushTrackToQueue } = usePlaylistActions();
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] =
    useState<React.ComponentType<UploadTrackDialogProps> | null>(null);

  const onUploaded = (track: Track) => {
    pushTrackToQueue(track);
  };
  const handleClick = async () => {
    if (!Dialog) {
      const dialog = await import("./UploadTrackDialog");
      setDialog(() => dialog.UploadTrackDialog);
    }
    setOpen(true);
  };
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="cursor-pointer relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${track.coverImage})` }}
        data-testid={`upload-track-${track.id}`}
        onClick={handleClick}>
        {track.coverImage && (
          <div className="absolute inset-0 bg-black/30 z-0" />
        )}
        <span className="sr-only">Upload an audio file</span>
        <div className="relative z-10">
          <Upload
            className={cn(track.coverImage ? "text-white" : "text-foreground")}
          />
        </div>
      </Button>
      {Dialog && (
        <Dialog
          trackId={track.id}
          open={open}
          onOpenChange={setOpen}
          onSuccess={onUploaded}
        />
      )}
    </>
  );
};
