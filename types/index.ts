export type Profile = {
  _id: string
  fullName: string
  headline: string
  skills: Skill[]
}
export type Skill = {
  _key: string
  title: string
  theme?: "light" | "dark"
  homePageUrl: string
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}