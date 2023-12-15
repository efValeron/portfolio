import { AboutSec } from "@/app/(site)/about/components/AboutSec"
import { isProtected } from "@/app/(site)/isProtected"

function About() {
  return (
    <main>
      <section className="flex min-h-screen py-32 flex-col items-center justify-center">
        <AboutSec/>
      </section>
    </main>
  )
}

export default isProtected(About, "underMaintenance")