import { PropsWithChildren } from "react";
import { Popover, PopoverContent } from "@/shared/ui";

export interface Props extends PropsWithChildren {
  open: boolean;
  title: string;
  onOpenChange: (value: boolean) => void;
}

export const FilterPopover: React.FC<Props> = ({
  open,
  title,
  children,
  onOpenChange,
}) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange} modal>
      <PopoverContent className="w-60">
        <div className="space-y-2">
          <h4 className="font-medium leading-none text-sm">{title}</h4>
          <>{children}</>
        </div>
      </PopoverContent>
    </Popover>
  );
};
