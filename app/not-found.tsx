import Link from "next/link"
import { ArrowLeft, SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <section className="min-h-[60vh] bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <SearchX className="mx-auto h-16 w-16 text-blue-600" aria-hidden="true" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">404 error</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Return to homepage
        </Link>
      </div>
    </section>
  )
}
