# Fine-tune GPT using OpenAI
`export OPENAI_API_KEY="your-key"`

`yarn install openai`  
`pip install --upgrade openai openai"[datalib]"`

## Load your data
Put your data in JSONL format. "In general, we've found that each doubling of the dataset size leads to a linear increase in model quality."-OpenAI. This example has only 18 lines (data.jsonl file), and even this somewhat works.

Convert data into OpenAI desired format:
`openai tools fine_tunes.prepare_data -f <FILENAME>`

## Upload prepared file to OpenAI
`node uploadFile.js`

When upload is done, copy File ID that is logged out.

## Start fine tuning your model
`node createFineTune.js`

It'll take some time, depending how big is your data. Exampled 18 lines took couple of minutes. You'll check the status in the next chapter

## List your Fine Tunes
`node listFineTunes.js`

If fine tuning is finished, copy name of `fine_tuned_model`.

## Testing it out
`node createCompletion.js`

