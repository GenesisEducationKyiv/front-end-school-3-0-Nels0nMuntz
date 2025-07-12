import { ListFilter, ListFilterPlus } from "lucide-react";
import { Button } from "music-player-ui";

interface Props {
  label: string;
  filter: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FilterButton: React.FC<Props> = ({ label, filter, onClick }) => {
  return (
    <Button variant="ghost" onClick={onClick}>
      {filter ? (
        <ListFilter size={16} className="text-foreground" />
      ) : (
        <ListFilterPlus size={16} className="text-muted-foreground" />
      )}
      <span className="sr-only">{label}</span>
    </Button>
  );
};
