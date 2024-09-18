import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from "./components/deskStructure.js"
import { seoMetaFields } from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'gym',

  projectId: '0w6apw2d',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure }), visionTool(), seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
