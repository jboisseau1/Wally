let subreddits = [];

function changeWallper() {
  let options = {
    subreddits: ['wallpaper', 'wallpapers'],
    sort: 'top',
    from: 'all',
    score: 100,
    domains: ['i.imgur.com', 'imgur.com'],
    types: ['png', 'jpg', 'jpeg'],
    directory: '~/.reddit-wallpaper',
    shuffle: true,
    resolution: { width: 1, height: 1 }
  };
  console.log(options);
  if (subreddits.length > 0) {
    console.log(subreddits);
    options.subreddits = subreddits;
    console.log(options);
  }
  require('reddit-wallpaper')(options).then(link =>
    console.log('Background set to ' + link.url)
  );
}

function checkboxList(subToAdd) {
  const _ = require('lodash');
  if (_.indexOf(subreddits, subToAdd) != -1) {
    //exsits -> remove
    _.remove(subreddits, n => n == subToAdd);

    console.log(subreddits);
  } else {
    subreddits.push(subToAdd);
    console.log(subreddits);
  }
  console.log('clicked', subToAdd);
}
