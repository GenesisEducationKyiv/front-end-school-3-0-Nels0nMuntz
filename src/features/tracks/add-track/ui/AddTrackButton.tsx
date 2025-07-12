import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "music-player-ui";
import { AddTrackForm } from "./AddTrackForm";
import { AddTrackDialog } from "./AddTrackDialog";

export const AddTrackButton = () => {
  const [open, setOpen] = useState(false);
  const handleSubmitted = () => setOpen(false);
  return (
    <AddTrackDialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          leftIcon={<CirclePlus />}
          className="xs:w-auto w-full"
          data-testid="create-track-button">
          <span>Add a track</span>
        </Button>
      }>
      <AddTrackForm onSubmitted={handleSubmitted} />
    </AddTrackDialog>
  );
};
