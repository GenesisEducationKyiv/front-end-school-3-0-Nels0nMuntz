import { Button } from "@/shared/ui";
import { CircleX } from "lucide-react";
import { DeleteFileDialog } from "./DeleteFileDialog";

interface Props {
  trackId: string;
}

export const DeleteFileButton: React.FC<Props> = ({ trackId }) => {
  return (
    <DeleteFileDialog trackId={trackId}>
      <Button size="icon" variant="outline" className="cursor-pointer">
        <CircleX />
      </Button>
    </DeleteFileDialog>
  );
};
