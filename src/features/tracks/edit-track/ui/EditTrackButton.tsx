import { useState, forwardRef } from "react";
import { Pencil } from "lucide-react";
import { Button } from "music-player-ui";
import { Track } from "@/entities/track";
import { EditTrackDialog } from "./EditTrackDialog";
import { EditTrackForm } from "./EditTrackForm";

interface Props {
  track: Track;
  onCloseDialog: () => void;
}

export const EditTrackButton = forwardRef<HTMLButtonElement, Props>(({ track, onCloseDialog }, ref) => {
  const [open, setOpen] = useState(false);
  const handleSubmitted = () => {
    setOpen(false);
    onCloseDialog();
  };
  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (value === false) onCloseDialog();
  };
  return (
    <EditTrackDialog
      open={open}
      onOpenChange={handleOpenChange}
      title={track.title}
      trigger={
        <Button
          ref={ref}
          variant="ghost"
          className="min-w-24  gap-x-4"
          data-testid={`edit-track-${track.id}`}
          leftIcon={<Pencil className="shrink-0" />}
        >
          <span className="grow text-left">Edit</span>
        </Button>
      }
    >
      <EditTrackForm track={track} onUpdated={handleSubmitted} />
    </EditTrackDialog>
  );
});
