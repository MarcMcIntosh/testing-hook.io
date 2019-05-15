
/* Hook.params - Incoming HTTP request data ( query string and form fields )
Hook.req
Hook.res
Hook.datastore
Hook.fs
Hook.sdk
Hook.schema
Hook.env
Hook.streaming */


/* testing client sidewith
fetch('https://hook.io/marc.mcintosh/testing-post-method', {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ url: 'http://google.com' }),
}).then(console.log).catch(console.error)
*/
module.exports = function handeler(hook) {
  const { req, res } = hook;

  req.body.data
}
