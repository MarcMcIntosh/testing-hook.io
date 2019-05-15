const request = require('request')
/* testing client sidewith
fetch('https://hook.io/marc.mcintosh/testing-post-method', {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ url: 'http://google.com', data: { message: 'hello' } }),
}).then(console.log).catch(console.error)
*/
module.exports = function handeler(hook) {
  const { req, res } = hook;
  const { url, data } = req.body;

  console.log(`${hook.time} [${req.method}]: from ${JSON.stringify(req.connection)}: for ${url}`);

  if(req.method !== 'POST') {
    res.status(400)
    return res.end();
  }
  request({
    url,
    method: 'POST',
    body: data,
    json: true,
  }, (err, responce, body) => {
    if(err) {
      console.error(err);
      res.send(err);
    }
    return res.json(responce);
  });
}
