const https = require('https')

const getUrl = page => `https://jsonmock.hackerrank.com/api/article_users?page=${page}`

const httpGet = url => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding('utf8');

      let body = '';

      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(JSON.parse(body)));
    }).on('error', reject);
  });
};

const getUserNamesGreatherThanTreshold = (data, threshold) => data.filter(user => user.submission_count > threshold).map(item => item.username)

async function getUsernames(threshold) {
  if (threshold == null) return []

  let body = await httpGet(getUrl(1));
  let users = getUserNamesGreatherThanTreshold(body.data, threshold)

  for (let page = 2; page <= body.total_pages; page++) {
    body = await httpGet(getUrl(page));
    users = users.concat(getUserNamesGreatherThanTreshold(body.data, threshold))
  }

  console.log(users)
  return users
}

getUsernames(10)