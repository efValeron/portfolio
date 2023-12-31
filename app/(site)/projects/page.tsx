import { isProtected } from "@/app/(site)/isProtected"

function Projects() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="mt-3 text-2xl">This page is all about my projects!</p>
    </section>
  )
}

export default isProtected(Projects, "underMaintenance")