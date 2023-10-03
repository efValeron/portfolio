export type Profile = {
  _id: string
  fullName: string
  specialization: string
  headline: string
  shortBio: string
  socialLinks: SocialLink[]
  skills: Skill[]
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