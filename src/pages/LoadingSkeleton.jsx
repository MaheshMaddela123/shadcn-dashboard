import { Skeleton } from '../components/ui/skeleton';

export default function LoadingSkeleton() {
  return (
    <div className="p-6">
      <Skeleton className="h-10 w-1/3 mb-4" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      <Skeleton className="h-8 w-full mb-2" />
      
      <Skeleton className="h-8 w-full" />
    </div>
  );
}