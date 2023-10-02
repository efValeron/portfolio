export const getSanitySvgImageUrl = (ref: string) => {
  const url = `https://cdn.sanity.io/images/g9f0cyip/production/${ref.match(/(\w+-\d+x\d+)/)![0]}.svg`
  return url
}