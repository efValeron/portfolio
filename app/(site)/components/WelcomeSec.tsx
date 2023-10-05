"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import {Profile} from "@/types"
import {getProfileForHome} from "@/sanity/sanity.query"
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import {TypeAnimation} from 'react-type-animation'
import {Skills} from "@/app/(site)/components/Skills";
import {Interval} from "@/app/(site)/components/Interval";

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
        <div className="flex gap-10 lg:gap-20 xl:gap-32 container lg:px-20 xl:px-32 flex-col lg:flex-row">
          <div className="px-8 md:px-16 lg:w-1/2 lg:px-0">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, ease: "backOut"}}
              className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold glowing">
              Hi there👋, I'm
            </motion.h1>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, ease: "backOut"}}
              className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold mt-2 lg:mt-4 glowing text-primary-600">
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
            <motion.h3
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.25, ease: "backOut"}}
              className="mt-5 lg:mt-10 text-md md:text-lg lg:text-xl xl:text-2xl font-bold">
              {profile.headline}
            </motion.h3>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 0.85, y: 0}}
              transition={{duration: 1, delay: 0.5, ease: "backOut"}}
              className="mt-5 lg:mt-10">
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.75, ease: "backOut"}}
              className="mt-5 md:mt-10 flex gap-2 flex-col md:flex-row">
              <SocialLinks socialLinks={profile.socialLinks}/>
            </motion.div>
          </div>

          <div className="px-8 lg:self-start lg:w-1/2 lg:px-0 box-border">
            <motion.h3
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1, ease: "backOut"}}
              className="text-xl lg:text-2xl font-semibold text-center mb-6 lg:mb-8">Time since I started <span
              className="text-gradient font-extrabold">experiencing</span>:
            </motion.h3>
            <Interval/>

            <motion.h4
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1.5, ease: "backOut"}}
              className="text-lg lg:text-xl font-medium text-center mt-10 mb-5 lg:mt-12 lg:mb-8"
            >These pictures
              seem familiar to me:
            </motion.h4>
            <div className="flex justify-center">
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
                <Skills skills={profile.skills}/>
              </div>
            </div>
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
