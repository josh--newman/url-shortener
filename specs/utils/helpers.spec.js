import { isValidUrl, formUrl } from '../../utils/helpers';
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
      expect(isValidUrl('http:/www.google.com')).to.equal(false);
      expect(isValidUrl('blahblahfoobar')).to.equal(false);
    });

  });

  describe('formUrl', () => {

  });

});
