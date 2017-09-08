importScripts('five-hundred-px-service.js');

const service = new FiveHundredPxService();

onmessage = (event) => {
  const request = event.data;

  if (request == 'fetch')
    service.fetch().then((data) => postMessage(data));
};
