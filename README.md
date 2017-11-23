
### Sites Used
- Awesome vector creator online - https://vectr.com/cts_ae/b6uk4g8sk
- https://en.wikipedia.org/wiki/Glider_(Conway%27s_Life)
- https://gist.github.com/akhoury/9118682
   - Interesting, but possibly dangerous. I figured out a weird way to get my logic tests through by checking whether or not a key was defined in the template
   - via: https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
- https://gist.github.com/akhoury/9118682
   - Handlebars helper so you can use logic in your templates!
- http://expressjs.com/en/api.html
- https://getbootstrap.com/docs/4.0/getting-started/introduction/
- https://css-tricks.com/equidistant-objects-with-css/
- https://v4-alpha.getbootstrap.com/layout/grid/#responsive-classes
- https://github.com/remy/nodemon/issues/727
- Great example of module usage https://github.com/paulirish/es-modules-todomvc/blob/master/docs/view.js
- All the flavors of imports https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- Require vs import http://researchhubs.com/post/computing/javascript/nodejs-require-vs-es6-import-export.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
- https://expressjs.com/en/guide/routing.html
- https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
- https://expressjs.com/en/4x/api.html#res.download

### Requirements
- [x] The webpages are presentable as a whole; the interface is user-friendly; the website contains pictures or videos.  --20 points
- [x] Website has 1 homepage and at least 3 subpages; the homepage and subpages have a horizontal menu that leads to the other pages.   --10 points
- [x] The homepage has picture carousel animation.   --10 points
- [x] Have a scroll box in one page.  --10 points
- [x] One page has unordered HTML list with several entries.  --10 points
- [x] There is a button to download files. --10 points
- [x] There is a link that you can click and leads to outside webpages. --10 points

### Server Setup
- Spinup Ubuntu
- Setup domain
- ssh into the server
- Install NVM https://github.com/creationix/nvm#install-script
- Install node version via NVM
- Install python3.6 and python2.7 via apt
- Install make
- `sudo apt-get install build-essential` this may have done the python and make `¯\_(ツ)_/¯`
- All this for some damned sass `/le sigh`
- **Note to self**: Look into Dokku...
- Install git LFS: https://github.com/git-lfs/git-lfs/wiki/Installation
   - `git lfs pull`

### Dependencies
- `npm install pm2 -g`
   - pm2 start pm2-launcher.json