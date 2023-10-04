import {PortableTextBlock} from "sanity";

export type Profile = {
  _id: string
  fullName: string
  specialization: string
  headline: string
  shortBio: string
  socialLinks: SocialLink[]
  skills: Skill[]
  profileImage: {
    alt: string,
    image: string
  },
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
}
export type SocialLink = {
  _key: string
  title: string
  url: string
}
export type Skill = {
  _key: string
  title: string
  theme?: "light" | "dark"
  homePageUrl: string
  image: {
    asset: {
      _ref: string
    }
  }
}