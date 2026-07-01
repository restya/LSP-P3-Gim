import fs from 'fs';
fetch('https://docs.google.com/presentation/d/1rPOKgqnbRrUUwizA-j1VCihSrQ0bdtmGPtP7Qkdbji4/export/txt')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('presentation.txt', text);
    console.log('Downloaded');
  })
  .catch(console.error);
