import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";

export interface Props extends PropsWithChildren {
  title: string;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const EditTrackDialog: React.FC<Props> = ({ title, open, children, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default EditTrackDialog;
