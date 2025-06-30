import React, { PropsWithChildren } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui";

export interface Props extends PropsWithChildren {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const AddTrackDialog: React.FC<Props> = ({ open, children, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a track</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AddTrackDialog;
