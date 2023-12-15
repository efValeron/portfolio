import { WelcomeSec } from "@/app/(site)/components/WelcomeSec"

function Home() {
  return (
    <main>
      <section className="flex min-h-screen pt-28 lg:pt-16 max-lg:pb-12 flex-col lg:justify-center items-center">
        <WelcomeSec/>
      </section>
    </main>
  )
}

export default Home