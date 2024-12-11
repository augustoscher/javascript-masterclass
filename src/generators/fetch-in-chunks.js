function* fetchInChunks(data) {
  for (let i = 0; i < data.length; i += 2) {
    yield data.slice(i, i + 2);
  }
}

const chunks = fetchInChunks([1, 2, 3, 4, 5, 6, 7, 8]);

while (true) {
  const { value, done } = chunks.next();
  if (done) {
    break;
  }
  console.log(value);
}