import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfileForHome() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      specialization,
      headline,
      shortBio,
      socialLinks,
      skills,
    }`
  );
}
export async function getProfileForAbout() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      skills,
    }`
  );
}