import { useState, forwardRef } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/shared/ui";
import { Track } from "@/entities/track";
import type { Props as EditTrackDialogProps } from "./EditTrackDialog";
import { EditTrackForm } from "./EditTrackForm";

interface Props {
  track: Track;
  onCloseDialog: () => void;
}

export const EditTrackButton = forwardRef<HTMLButtonElement, Props>(
  ({ track, onCloseDialog }, ref) => {
    const [open, setOpen] = useState(false);
    const [Dialog, setDialog] =
      useState<React.ComponentType<EditTrackDialogProps> | null>(null);

    const handleSubmitted = () => {
      setOpen(false);
      onCloseDialog();
    };
    const handleOpenChange = (value: boolean) => {
      setOpen(value);
      if (value === false) onCloseDialog();
    };
    const handleClick = async () => {
      if (!Dialog) {
        const dialog = await import("./EditTrackDialog");
        setDialog(() => dialog.default);
      }
      setOpen(true);
    };
    return (
      <>
        <Button
          ref={ref}
          variant="ghost"
          className="w-full flex items-center gap-x-4"
          data-testid={`edit-track-${track.id}`}
          onClick={handleClick}>
          <Pencil className="shrink-0" />
          <span className="grow text-left">Edit</span>
        </Button>
        {Dialog && (
          <Dialog
            open={open}
            onOpenChange={handleOpenChange}
            title={track.title}>
            <EditTrackForm track={track} onUpdated={handleSubmitted} />
          </Dialog>
        )}
      </>
    );
  }
);
