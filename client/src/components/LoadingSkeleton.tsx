import { cn } from "@/lib/utils";

type LoadingSkeletonProps = {
  className?: string;
  lines?: number;
};

export function LoadingSkeleton({
  className,
  lines = 3,
}: LoadingSkeletonProps) {
  return (
    <div className={cn("w-full space-y-3", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 animate-pulse rounded-md bg-muted"
          style={{ width: `${100 - index * 12}%` }}
        />
      ))}
    </div>
  );
}
