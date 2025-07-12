import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "music-player-ui";
import { useSelections } from "@/shared/model";
import { DeleteMultipleTracksDialog } from "./DeleteMultipleTraksDialog";

export const DeleteMultipleTraksButton = () => {
  const selection = useSelections();
  const [open, setOpen] = useState(false);
  if (Object.keys(selection).length === 0) return null;
  return (
    <DeleteMultipleTracksDialog open={open} onOpenChange={setOpen}>
      <Button
        variant="secondary"
        leftIcon={<Trash2 className="shrink-0 text-destructive" />}>
        <span className="grow text-left text-destructive">Delete</span>
      </Button>
    </DeleteMultipleTracksDialog>
  );
};
