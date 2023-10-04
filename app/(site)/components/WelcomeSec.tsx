"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import {Profile} from "@/types"
import {getProfileForHome} from "@/sanity/sanity.query"
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import {TypeAnimation} from 'react-type-animation'
import {Skills} from "@/app/(site)/components/Skills";
import {ExternalLink} from "lucide-react";

export const WelcomeSec = () => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfileHandle().then(profile => setProfile(profile[0]))
  }, [])

  const getProfileHandle = async () => await getProfileForHome()

  return (
    <>
      {
        profile &&
        <div className="flex gap-32 items-center container px-44">
          <div className="text-left w-1/2">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, ease: "backOut"}}
              className="text-6xl font-extrabold glowing">
              Hi there👋, I'm
            </motion.h1>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, ease: "backOut"}}
              className="text-5xl font-extrabold mt-4 glowing text-primary-600">
              <TypeAnimation
                sequence={[
                  1000,
                  profile.fullName,
                  1000,
                  profile.specialization,
                ]}
                wrapper="span"
                speed={10}
                deletionSpeed={50}
                preRenderFirstString
                repeat={Infinity}
              />
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.25, ease: "backOut"}}
              className="mt-10 text-3xl font-bold">
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 0.85, y: 0}}
              transition={{duration: 1, delay: 0.5, ease: "backOut"}}
              className="mt-10 w-4/5">
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.75, ease: "backOut"}}
              className="mt-10 flex gap-2">
              <SocialLinks socialLinks={profile.socialLinks}/>
            </motion.div>
          </div>
          {/*<div className="gap-8 grid grid-cols-1 sm:grid-cols-2">*/}
          <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Skills skills={profile.skills}/>
            {/*<HomeCard/>*/}
            {/*<HomeCard/>*/}
            {/*<HomeCard/>*/}
            {/*<HomeCard/>*/}
          </div>
        </div>
      }
    </>
  )
}

const SocialLinks = ({socialLinks}: { socialLinks: Profile["socialLinks"] }) => {
  return socialLinks.map((link) =>
    <Link key={link._key} isBlock showAnchorIcon color="foreground" href={link.url} target="_blank" as={NextLink}>
      {link.title}
    </Link>
  )
}
