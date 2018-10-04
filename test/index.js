const expect = require('chai').expect;
// const proxyquire = require('proxyquire');
const nock = require('nock');

describe('videoblocks', function () {
  it('should throw on invalid config', function () {
    expect(require('..')).to.throw();
  });

  it('should provide a function you can use to make requests', function () {
    const videoblocks = require('..')({
      publicKey: 'public',
      privateKey: 'private'
    });
    expect(videoblocks).to.be.a('function');
  });

  it('should auth requests', function () {
    nock('https://api.videoblocks.com')
      .get('/endpoint')
      .query((qs) => qs.APIKEY && qs.EXPIRES && qs.HMAC)
      .reply(200, {});
    const videoblocks = require('..')({
      publicKey: 'public',
      privateKey: 'private'
    });
    return videoblocks('/endpoint');
  });
});
