import { PropsWithChildren, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@/shared/ui";
import { Loader2 } from "lucide-react";
import { useDeleteFileMutation } from "../api/useDeleteFileMutation";

interface Props extends PropsWithChildren {
  trackId: string;
}

export const DeleteFileDialog: React.FC<Props> = ({
  trackId,
  children,
}) => {

  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);
  const { mutate, isPending } = useDeleteFileMutation({ onSuccess: closeDialog });
  const handleDelete = () => mutate(trackId);
  return (
    <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the audio file.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" className="bg-white min-w-24 cursor-pointer">
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button variant="destructive" onClick={handleDelete} className="min-w-24 cursor-pointer">
            {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
