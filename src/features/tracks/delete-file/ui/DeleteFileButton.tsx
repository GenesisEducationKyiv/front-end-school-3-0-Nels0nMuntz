import { useState } from "react";
import { CircleX } from "lucide-react";
import { Button } from "@/shared/ui";
import type { Props as DeleteFileDialogProps } from "./DeleteFileDialog";

interface Props {
  trackId: string;
}

export const DeleteFileButton: React.FC<Props> = ({ trackId }) => {
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] =
    useState<React.ComponentType<DeleteFileDialogProps> | null>(null);

  const handleDeleted = () => setOpen(false);
  const handleClick = async () => {
    if (!Dialog) {
      const dialog = await import("./DeleteFileDialog");
      setDialog(() => dialog.default);
    }
    setOpen(true);
  };
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="cursor-pointer"
        onClick={handleClick}>
        <CircleX />
      </Button>
      {Dialog && (
        <Dialog
          trackId={trackId}
          open={open}
          onOpenChange={setOpen}
          onDeleted={handleDeleted}
        />
      )}
    </>
  );
};
