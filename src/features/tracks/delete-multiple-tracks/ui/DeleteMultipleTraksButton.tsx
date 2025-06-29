import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/shared/ui";
import { useSelections } from "@/shared/model";
import type { Props as DeleteMultipleTracksDialogProps } from "./DeleteMultipleTraksDialog";

export const DeleteMultipleTraksButton = () => {
  const selection = useSelections();
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] =
    useState<React.ComponentType<DeleteMultipleTracksDialogProps> | null>(null);

  const handleClick = async () => {
    if (!Dialog) {
      const dialog = await import("./DeleteMultipleTraksDialog");
      setDialog(() => dialog.default);
    }
    setOpen(true);
  };

  if (Object.keys(selection).length === 0) return null;

  return (
    <>
      <Button
        variant="secondary"
        className="cursor-pointer flex items-center gap-x-4"
        onClick={handleClick}
      >
        <Trash2 className="shrink-0 text-destructive" />
        <span className="grow text-left text-destructive">Delete</span>
      </Button>
      {Dialog && <Dialog open={open} onOpenChange={setOpen} />}
    </>
  );
};
