import { openai } from './api.js'

async function createFineTune () {
  try {
    const response = await openai.createFineTune({
      training_file: 'file-oIKI2xcTwWjF9yHnmUeXAtqh',
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.error('err: ', err)
  }
}

createFineTune()