// const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
// //   console.log('statusCode:', res.statusCode);
// //   console.log('headers:', res.headers);

//   res.on('data', (d) => {
    
//     console.log(JSON.parse(decodeURI(d)).copyright)
//     console.log(JSON.parse(decodeURI(d)).date)
//     console.log(JSON.parse(decodeURI(d)).explanation)
//     console.log(JSON.parse(decodeURI(d)).hdurl)
//   });

// }).on('error', (e) => {
//   console.error(e);
// });

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {

  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  
  resp.on('end', () => {
    let a = JSON.parse(data)
    for (let b=0; b<a.length; b++){
       console.log(a[b].userId);
       console.log(a[b].id);
       console.log(a[b].title);
       console.log(a[b].body);
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
