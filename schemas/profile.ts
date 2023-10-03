import {defineArrayMember, defineField} from "sanity";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "specialization",
      title: "Specialization",
      type: "string",
      description: "What do you specialize in?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(30).max(50),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description: "Add your social media links:",
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({
        type: "object",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "url",
            title: "Url",
            type: "url",
            validation: (Rule) => Rule.required(),
          },
        ]
      })],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      description: "What skills do you have?",
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({
        type: "object",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "theme",
            title: "Theme",
            type: "string",
          },
          {
            name: "homePageUrl",
            title: "Home page url",
            type: "url",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
          },
        ]
      })],
    }),
  ],
};

export default profile;