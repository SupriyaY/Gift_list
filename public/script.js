let feed = new Instafeed({
    get: 'tagged',
    tagName: 'handbags',
    clientId: 'YOUR_CLIENT_ID'
});
feed.run();