import { getProfile } from "@/sanity/sanity.query"
import { Profile } from "../../sanity/types"
import Typography from "@/components/ui/Typography"
import { Spotlight } from "@/components/ui/Spotlight"
import { WavyBackground } from "@/components/ui/wavy-background"

const getData = async () => {
  const res = await getProfile()
  const profileData: Profile = res[0]
  return profileData
}

export default async function Page() {
  const profileData = await getData()

  return (
    <main className="dark bg-background text-foreground overflow-hidden flex-1">
      <section className="container flex flex-col justify-center py-16 min-h-0 relative">
          <Typography.h1>I'm {profileData.fullName}</Typography.h1>
          <Typography.h4>{profileData.shortBio}</Typography.h4>
      </section>
    </main>
  )
}