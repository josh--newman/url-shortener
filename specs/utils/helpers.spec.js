import { isValidUrl, formatUrl } from '../../utils/helpers';
import { expect } from 'chai';

describe('Utils', () => {

  describe('isValidUrl', () => {
    it('knows that URLs without "www" are valid', () => {
      expect(isValidUrl('google.com')).to.equal(true);
      expect(isValidUrl('amazon.com')).to.equal(true);
    });

    it('knows that URLs without "http://" are valid', () => {
      expect(isValidUrl('www.google.com')).to.equal(true);
      expect(isValidUrl('www.amazon.com')).to.equal(true);
    });

    it('knows that valid URLs are valid', () => {
      expect(isValidUrl('http://www.google.com')).to.equal(true);
      expect(isValidUrl('http://www.example-url.com')).to.equal(true);
    });

    it('knows that invalid URLs are invalid', () => {
      expect(isValidUrl('httpwwwgooglecom')).to.equal(false);
      expect(isValidUrl('foobar@howisthisaurl')).to.equal(false);
      expect(isValidUrl('blahblahfoobar')).to.equal(false);
    });
  });

  describe('formatUrl', () => {
    it('adds "http://" when missing', () => {
      expect(formatUrl('www.google.com')).to.equal('http://www.google.com');
    });

    it('doesn’t add anything to invalid URLs', () => {
      const badFormat = formatUrl.bind(this, 'foobarblahblah');
      expect(badFormat).to.throw(Error, /Invalid URL/);
    });

    it('doesn’t re-add "http://" if already present', () => {
      expect(formatUrl('http://www.google.com')).to.equal('http://www.google.com');
    });
  });

});
