function wait(ms) {
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

class FiveHundredPxService {
  fetch() {
    return fetch(
      'https://api.500px.com/v1/photos/search?consumer_key=atEYagb4vsDYXWzKdBPeyBI301bpnGXgKMNDQ4Kk&exclude_nude=1&image_size=1080&sort=created_at&tag=mountains'
    ).then(response => {
      return response.json().then(json => json.photos);
    });
  }
}
