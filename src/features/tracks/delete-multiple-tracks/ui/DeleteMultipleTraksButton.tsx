import { Trash2 } from "lucide-react";
import { Button } from "@/shared/ui";
import { useSelections } from "@/shared/model";
import { DeleteMultipleTracksDialog } from "./DeleteMultipleTraksDialog";

export const DeleteMultipleTraksButton = () => {
  const selection = useSelections();
  if (Object.keys(selection).length === 0) return null;
  return (
    <DeleteMultipleTracksDialog>
      <Button
        variant="secondary"
        className="cursor-pointer flex items-center gap-x-4">
        <Trash2 className="shrink-0 text-destructive" />
        <span className="grow text-left text-destructive">Delete</span>
      </Button>
    </DeleteMultipleTracksDialog>
  );
};
