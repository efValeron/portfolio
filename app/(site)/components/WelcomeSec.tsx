"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import {Profile} from "@/types"
import {getProfileForHome} from "@/sanity/sanity.query"
import Image from "next/image"
import {getSanitySvgImageUrl} from "@/utils"
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import {TypeAnimation} from 'react-type-animation'
import {HomeCard} from "@/app/(site)/components/HomeCard";

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
        <div className="flex gap-32 items-center container">
          <div className="text-left w-1/2">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1}}
              className="text-6xl font-extrabold glowing">
              Hi there👋, I'm
            </motion.h1>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1}}
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
              transition={{duration: 1, delay: 0.25}}
              className="mt-10 text-3xl font-bold">
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 0.75, y: 0}}
              transition={{duration: 1, delay: 0.5}}
              className="mt-10 w-4/5">
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.75}}
              className="mt-10 flex gap-2">
              <SocialLinksSection socialLinks={profile.socialLinks}/>
            </motion.div>
          </div>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
            {/*<SkillsSection skills={profile.skills}/>*/}
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
          </div>
        </div>
      }
    </>
  )
}

const SocialLinksSection = ({socialLinks}: { socialLinks: Profile["socialLinks"] }) => {
  return socialLinks.map((link) =>
    <Link key={link._key} isBlock showAnchorIcon color="primary" href={link.url} target="_blank" as={NextLink}>
      {link.title}
    </Link>
  )
}
