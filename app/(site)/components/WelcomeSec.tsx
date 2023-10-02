"use client"

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {ProfileType} from "@/types";
import {getProfile} from "@/sanity/sanity.query";

export const WelcomeSec = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    getProfileHandle().then(profile => setProfile(profile[0]));
  }, [])

  const getProfileHandle = async () => await getProfile()

  return (
    <>
      {
        profile &&
        <>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-5xl font-bold drop-shadow-light-glow dark:drop-shadow-dark-glow">Hi there👋,
            I'm {profile.fullName}!
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.5}}
            className="mt-8 text-center text-2xl drop-shadow-light-glow dark:drop-shadow-dark-glow">{profile.headline}
          </motion.p>
        </>
      }
    </>
  )
    ;
};