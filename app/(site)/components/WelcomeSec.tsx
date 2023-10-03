"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import {Profile} from "@/types"
import {getProfile} from "@/sanity/sanity.query"
import Image from "next/image"
import {getSanitySvgImageUrl} from "@/utils"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'

export const WelcomeSec = () => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfileHandle().then(profile => setProfile(profile[0]))
  }, [])

  const getProfileHandle = async () => await getProfile()

  return (
    <>
      {
        profile &&
        <div className="flex gap-32 items-center">
          <div className="text-left">
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-6xl welcome-heading">
            Hi there👋, I'm
          </motion.h1>
          <motion.h2
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-5xl mt-4 welcome-heading text-gradient">
            <TypeAnimation
              sequence={[
                1000,
                profile.fullName,
                1000,
                // profile.specialization,
                "Front-End Developer",
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
            className="mt-10 text-3xl drop-shadow-light-glow dark:drop-shadow-dark-glow">
            {profile.headline}
          </motion.p>
          </div>
          <div className="mt-8 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <SkillsSection profile={profile}/>
          </div>
        </div>
      }
    </>
  )
}

const SkillsSection = ({profile}: {
  profile: Profile
}) => {
  return profile.skills.map((skill, index) =>
    // console.log(skill.theme === undefined || skill.theme === theme ? skill.title : false)
    skill.theme === undefined || skill.theme === "dark"
      ? <motion.div
        initial={{opacity: 0, y: 20}}
        // initial={{opacity: 0, y: index % 2 === 0 ? 5 : -5,}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.75, delay: index * 0.05}}
        key={skill._key}
      >
        <Link href={skill.homePageUrl} target="_blenk">
          <Image
            src={getSanitySvgImageUrl(skill.image.asset._ref)}
            alt={skill.title}
            width={40}
            height={40}
          />
        </Link>
      </motion.div>
      : null
  )
}