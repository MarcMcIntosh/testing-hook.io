const dropRequestsFor = require('../src/dropRequestsFor');

describe('src/dropRequestsFor', () => {

  it('it returns a function that rejects hooks with a matching ip', () => {
    const local = dropRequestsFor('127.0.0.1');

    const hook = {
      req: { body: { url: '127.0.0.1' } },
    };

    dropRequestsFor(hook, (err, res) => {
      expect(err).toBe(true);
    });

  });

  /* it('p[erforms a dns look up on the payload to find the ip address', () => {
    const local = dropRequestsFor('127.0.0.1');
    const hook = {
      req: {
        body: {
          url: 'localhost',
        }
      },
      res: {
        status: jest.fn(),
        end: jest.fn()
      }
    };
  }) */

})
