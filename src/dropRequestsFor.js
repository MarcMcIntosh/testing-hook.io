const dns = require('dns');

const dropRequestsFor = addressToDrop => (hook, callback) => {
  const { req: { body: { url } } } = hook;

  return dns.lookup(addressToDrop, (errToDrop, addressIp) => {
    if (errToDrop) { return callback(errToDrop, hook); }

    return dns.lookup(url, (err, targetIp) => {
      if (targetIp === addressIp) {
        return hook.res.status(403).send('blocked url');
      }

      return callback(null, hook);
    });
  });
};

module.exports = dropRequestsFor;
