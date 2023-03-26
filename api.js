import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = process.env.OPENAI_API_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)