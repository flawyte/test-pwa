importScripts('five-hundred-px-service.js');var service=new FiveHundredPxService;onmessage=function(b){var c=b.data;'fetch'==c&&service.fetch().then(function(d){return postMessage(d)})};