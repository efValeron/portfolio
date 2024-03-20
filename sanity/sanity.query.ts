import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      location,
      fullBio,
      specialization,
      email,
      headline,
      shortBio,
      profileImage {alt, "image": asset->url},
      socialLinks,
      "resumeURL": resumeURL.asset->url,
      skills,
    }`
  );
}