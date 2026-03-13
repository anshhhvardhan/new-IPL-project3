const axios = require('axios');
const fs = require('fs');

const players = [
  'Sai Sudharsan', 'Suryakumar Yadav', 'Virat Kohli', 'Shubman Gill', 'Mitchell Marsh',
  'Prasidh Krishna', 'Noor Ahmad', 'Josh Hazlewood', 'Trent Boult', 'Arshdeep Singh'
];

async function run() {
  for (const p of players) {
    try {
      // search wikipedia or something similar for image
      const searchRes = await axios.get('https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(p) + '&prop=pageimages&format=json&pithumbsize=200');
      const pages = searchRes.data.query.pages;
      const page = Object.values(pages)[0];
      if (page.thumbnail) {
        console.log(p + '|' + page.thumbnail.source);
      } else {
        console.log(p + '|NOT_FOUND');
      }
    } catch(e) {
      console.log(p + '|ERROR');
    }
  }
}
run();
