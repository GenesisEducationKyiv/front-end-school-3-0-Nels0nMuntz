import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "@/shared/ui";
import { AddTrackForm } from "./AddTrackForm";
import type { Props as AddTrackDialogProps } from "./AddTrackDialog";

export const AddTrackButton = () => {
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] =
    useState<React.ComponentType<AddTrackDialogProps> | null>(null);

  const handleSubmitted = () => setOpen(false);

  const handleClick = async () => {
    if (!Dialog) {
      const dialog = await import("./AddTrackDialog");
      setDialog(() => dialog.default);
    }
    setOpen(true);
  };
  return (
    <>
      <Button
        className="flex items-center gap-x-2 cursor-pointer xs:w-auto w-full"
        data-testid="create-track-button"
        onClick={handleClick}>
        <CirclePlus />
        <span>Add a track</span>
      </Button>
      {Dialog && (
        <Dialog open={open} onOpenChange={setOpen}>
          <AddTrackForm onSubmitted={handleSubmitted} />
        </Dialog>
      )}
    </>
  );
};
