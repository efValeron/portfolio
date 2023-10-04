"use client"

import {useEffect, useState} from "react";
import {Profile} from "@/types";
import {getProfileForAbout} from "@/sanity/sanity.query";
import {motion} from "framer-motion";
import {Skills} from "@/app/(site)/components/Skills";
import {PortableText} from "@portabletext/react";
import {Button, Image, Link} from "@nextui-org/react";
import NextImage from "next/image";
import {getSanitySvgImageUrl} from "@/utils";
import {Mail} from "lucide-react";

export const AboutSec = () => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfileHandle().then(profile => setProfile(profile[0]))
  }, [])

  const getProfileHandle = async () => await getProfileForAbout()

  return (
    <>
      {
        profile &&
        <div className="flex gap-32 container px-44">
          <div className="text-left w-1/2">
            <motion.h3
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1, ease: "backOut"}}
              className="text-4xl font-bold leading-normal">
              {`I'm ${profile.fullName}. I live in ${profile.location}, where I design the future.`}
            </motion.h3>

            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 0.85, x: 0}}
              transition={{duration: 1, delay: 0.25, ease: "backOut"}}
              className="mt-10 text-medium">
              <PortableText value={profile.fullBio} />
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <Image
              as={NextImage}
              width={320}
              height={320}
              src={profile.profileImage.image}
              alt={profile.profileImage.alt}
              className="rounded-xl object-cover w-80 h-80"
            />
            <Button
              href={`${profile.resumeURL}?dl=${profile.fullName.split(" ").join("_")}_resume.pdf`}
              as={Link}
              color="default"
              variant="solid"
              className="rounded-lg"
            >Download Resumé</Button>

            <p className="-my-2 text-center font-light text-sm">or</p>

            <Button
              href={profile.resumeURL}
              as={Link}
              showAnchorIcon
              color="default"
              isExternal
              variant="solid"
              className="rounded-lg"
            >View Resumé</Button>

            <Link
              href={`mailto:${profile.email}`}
              isExternal
              color="foreground"
              className="font-light mt-2"
            ><Mail size={16} strokeWidth={2.5} className="mr-2"/>{profile.email}</Link>
          </div>
        </div>
      }
    </>
  )
}