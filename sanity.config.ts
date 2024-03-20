import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'g9f0cyip',
  dataset: 'production',

  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
