/* eslint-env jest */
const dropRequestsFor = require('../src/dropRequestsFor');

describe('src/dropRequestsFor', () => {
  describe('should pass', () => {
    const hook = {
      req: { body: { url: 'example.com' } },
      res: {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      },
    };

    dropRequestsFor('127.0.0.1')(hook, (err, res) => {
      expect(hook.res.send).not.toHaveBeenCalled();
      expect(res).toEqual(hook);
    });
  });

  it('configure with an ip, drop matching an ip', () => {
    const byIp = dropRequestsFor('127.0.0.1');

    const hook = {
      req: { body: { url: '127.0.0.1' } },
      res: {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      },
    };

    byIp(hook, () => {
      expect(hook.res.status).toHaveBeenCalledWith('403');
      expect(hook.res.send).toHaveBeenCalled();
    });
  });

  it('configure with a domain, look up a domain, should drop', () => {
    const localhost = dropRequestsFor('localhost');

    const hook = {
      req: { body: { url: 'localhost' } },
      res: {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      },
    };

    localhost(hook, () => {
      expect(hook.res.status).toHaveBeenCalledWith('403');
      expect(hook.res.send).toHaveBeenCalled();
    });
  });

  it('configure a domain, look up an address: should drop', () => {
    const localhost = dropRequestsFor('127.0.0.1');

    const hook = {
      req: { body: { url: 'localhost' } },
      res: {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      },
    };

    localhost(hook, () => {
      expect(hook.res.status).toHaveBeenCalledWith('403');
      expect(hook.res.send).toHaveBeenCalled();
    });
  });
});
