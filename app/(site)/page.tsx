import {WelcomeSec} from "@/app/(site)/components/WelcomeSec";

export default function Home() {
  console.log("rendering home")
  return (
    <main>
      <section className="flex h-screen flex-col items-center justify-center gap-8">
        <WelcomeSec/>
      </section>
    </main>
  )
}
