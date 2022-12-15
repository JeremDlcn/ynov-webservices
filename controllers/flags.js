// Request to SOAP external Service

var http = require('follow-redirects').http;

var options = {
  'method': 'POST',
  'hostname': 'webservices.oorsprong.org',
  'path': '/websamples.countryinfo/CountryInfoService.wso',
  'headers': {
    'Content-Type': 'text/xml; charset=utf-8'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap12:Envelope xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\">\n  <soap12:Body>\n    <ListOfCountryNamesByName xmlns=\"http://www.oorsprong.org/websamples.countryinfo\">\n    </ListOfCountryNamesByName>\n  </soap12:Body>\n</soap12:Envelope>";

req.write(postData);

req.end();

// const axios = require('axios');

// var xmls =  "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <soap:Body>\n    <CountryFlag xmlns=\"http://www.oorsprong.org/websamples.countryinfo\">\n      <sCountryISOCode>US</sCountryISOCode>\n    </CountryFlag>\n  </soap:Body>\n</soap:Envelope>";


// axios.post('https://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso', xmls, {headers: {'Content-Type': 'text/xml; charset=utf-8'
// }})
// .then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// const axios = require('axios');

// axios.post('https://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso', xmls, {headers: {'Content-Type': 'text/xml; charset=utf-8'
// }})
// .then(function (response) {
//     console.log(response.data);
// }
// ).catch(function (error) {
//     console.error(error);
// }
// );

