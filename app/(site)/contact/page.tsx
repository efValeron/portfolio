import {ContactSec} from "@/app/(site)/contact/components/ContactSec"
import { isProtected } from "@/app/(site)/isProtected"

function Contact() {
  return (
    <main>
      <section className="flex h-screen flex-col items-center justify-center">
        <ContactSec/>
      </section>
    </main>
  )
}

export default isProtected(Contact, "underMaintenance")