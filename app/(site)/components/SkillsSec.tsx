import {Profile} from "@/types";
import {motion} from "framer-motion";
import {Link} from "@nextui-org/react";
import Image from "next/image";
import {getSanitySvgImageUrl} from "@/utils";

export const SkillsSec = ({skills}: { skills: Profile["skills"] }) => {
  return skills.map((skill, index) =>
    // console.log(skill.theme === undefined || skill.theme === theme ? skill.title : false)
    skill.theme === undefined || skill.theme === "dark"
      ? <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.75, delay: index * 0.05}}
        key={skill._key}
      >
        <Link href={skill.homePageUrl} target="_blank">
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