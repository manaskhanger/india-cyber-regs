import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl">
      <h1 className="font-serif text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">That page doesn’t exist on this site.</p>
      <p className="mt-4 flex gap-4">
        <Link to="/" className="text-teal-800 underline underline-offset-2 dark:text-teal-300">Home</Link>
        <Link to="/directions" className="text-teal-800 underline underline-offset-2 dark:text-teal-300">Directions</Link>
      </p>
    </div>
  )
}
