# URL Shortener
A service that shortens URLs. Written in Node.

### Shortening a URL
1. Takes a URL
2. Validates it's a correctly formatted URL
3. Hashes it and saves the hash in a data store

### Retrieving a URL
1. User hits shortened route
2. Look up hash in data store
3. If valid, redirect user to full URL
4. If not valid, show 404
