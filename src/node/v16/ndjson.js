import fs from 'fs/promises'

export const parseNdJson = async () => {
  try {
    const data = await load()
    return data.split('\n').filter(Boolean).map(line => JSON.parse(line))
  } catch (err) {
    console.log(err);
  }
  return []
}

const load = () => {
  const path = '/Users/augusto/src/augusto/javascript-masterclass/src/node/v16/models_new_summaries_and_titles.json'
  return fs.readFile(path, { encoding: 'utf8' });
}

