
const dropRequestsFor = address => (hook, callback) => {
  const { req: { body: { url }}} = hook;

  if (address === url) {

    console.log('Rejectng request for ' + JSON.stringify(hook.req));
    return callback(true, hook)
    // hook.res.status(403);
    // hook.res.send(`Refussing to send hook to ${url}`);

  }
  
}

module.exports = dropRequestsFor;
