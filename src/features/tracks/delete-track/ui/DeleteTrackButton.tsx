import { useState, forwardRef } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/shared/ui";
import type { Props as DeleteTrackDialogProps } from "./DeleteTrackDialog";

interface Props {
  trackId: string;
  onCloseDialog: () => void;
}

export const DeleteTrackButton = forwardRef<HTMLButtonElement, Props>(
  ({ trackId, onCloseDialog }, ref) => {
    const [open, setOpen] = useState(false);
    const [Dialog, setDialog] =
      useState<React.ComponentType<DeleteTrackDialogProps> | null>(null);

    const handleDeleted = () => {
      setOpen(false);
      onCloseDialog();
    };
    const handleOpenChange = (value: boolean) => {
      setOpen(value);
      if (value === false) onCloseDialog();
    };
    const handleClick = async () => {
      if (!Dialog) {
        const dialog = await import("./DeleteTrackDialog");
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
          data-testid={`delete-track-${trackId}`}
          onClick={handleClick}>
          <Trash2 className="shrink-0 text-destructive" />
          <span className="grow text-left text-destructive">Delete</span>
        </Button>
        {Dialog && (
          <Dialog
            trackId={trackId}
            open={open}
            onOpenChange={handleOpenChange}
            onDeleted={handleDeleted}
          />
        )}
      </>
    );
  }
);
