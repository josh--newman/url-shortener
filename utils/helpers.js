'use strict';

const isValidUrl = (url) => {
  const url_regex = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/;
  if (url.match(url_regex)) { return true; }
  else { return false; }
};

const formatUrl = (url) => {
  let formattedUrl = url;

  if (!isValidUrl(url)) { throw Error('Invalid URL'); }

  if (!~url.indexOf('http')) {
    formattedUrl = `http://${url}`;
  }

  return formattedUrl;
};

module.exports = {
  isValidUrl,
  formatUrl
};
