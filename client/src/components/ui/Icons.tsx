import {
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  LogOut,
  Menu,
  Plus,
  RefreshCw,
  Search,
  Settings,
  User,
  X,
  type LucideProps,
} from "lucide-react";

type RefreshIconProps = LucideProps & {
  isSpinning?: boolean;
};

function RefreshIcon({ className, isSpinning = false, ...props }: RefreshIconProps) {
  return (
    <RefreshCw
      className={[isSpinning ? "animate-spin" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export const Icons = {
  plus: Plus,
  refresh: RefreshIcon,
  menu: Menu,
  search: Search,
  user: User,
  settings: Settings,
  logOut: LogOut,
  chevronDown: ChevronDown,
  x: X,
  check: Check,
  eye: Eye,
  eyeOff: EyeOff,
};
