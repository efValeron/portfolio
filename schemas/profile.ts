import {defineField} from "sanity";

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
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(30).max(50),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      description: "What skills do you have?",
      validation: (Rule) => Rule.required(),
      of: [{
        type: "object",
        fields: [
          {
            name: "title",
            title: "Skill title",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "theme",
            title: "Skill theme",
            type: "string",
          },
          {
            name: "homePageUrl",
            title: "Skill home page url",
            type: "url",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "image",
            title: "Skill image",
            type: "image",
            validation: (Rule) => Rule.required(),
          },
        ]
      }],
    }),
  ],
};

export default profile;