import Skeleton from '@/components/ui/skeleton'

export default function MarketingLoading() {
  return (
    <div className="min-h-screen px-4 pt-32">
      <div className="max-w-6xl mx-auto space-y-8">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-full max-w-lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}