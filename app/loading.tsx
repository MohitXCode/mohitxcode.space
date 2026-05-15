import Skeleton from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 gap-8">
      {/* Badge skeleton */}
      <Skeleton className="h-8 w-40 rounded-full" />
      
      {/* Title skeleton */}
      <Skeleton className="h-20 w-96 max-w-full" />
      
      {/* Tagline skeleton */}
      <Skeleton className="h-6 w-80 max-w-full" />
      
      {/* Buttons skeleton */}
      <div className="flex items-center gap-4 mt-4">
        <Skeleton className="h-12 w-32 rounded-lg" />
        <Skeleton className="h-12 w-28 rounded-lg" />
      </div>
    </div>
  )
}