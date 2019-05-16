
const dropRequestsFor = (address) => (hook) => {
  const { req: { body: { url }}} = hook;

  if (address === url) {
    res.status(403);
    res.send(`Refussing to send hook to ${url}`);
  }
}

module.exports = dropRequestsFor;
