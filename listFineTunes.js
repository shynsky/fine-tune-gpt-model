import { openai } from './api.js'

async function listFineTunes () {
  try {
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
  } catch (err) {
    console.error('err: ', err)
  }
}

listFineTunes()