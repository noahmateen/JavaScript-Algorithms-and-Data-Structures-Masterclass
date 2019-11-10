function favoriteGenres(userMap, genreMap) {
  // Create map of songs to genres
  let songMap = mapSongsToGenres(genreMap);
  let results = {};
  // Iterate over users
  for (let user in userMap) {
    let usersGenres = [];
    let usersSongs = userMap[user];
    usersSongs.forEach(song => {
      usersGenres.push(songMap[song]);
    });
    results[user] = mostOccurances(usersGenres);
  }
  return results;
}

function mapSongsToGenres(genreMap) {
  let songMap = {};
  Object.keys(genreMap).forEach(key => {
    if (Array.isArray(genreMap[key])) {
      genreMap[key].forEach(song => {
        songMap[song] = key;
      });
    } else {
      songMap[genreMap[key]] = key;
    }
  });
  return songMap;
}

function mostOccurances(arr) {
  let frequency = {};
  let results = [];

  for (let el of arr) {
    if (frequency[el]) {
      frequency[el]++;
    } else {
      frequency[el] = 1;
    }
  }

  let values = Object.values(frequency);
  let max = values.sort()[values.length - 1];

  Object.keys(frequency).forEach(key => {
    if (frequency[key] === max) {
      results.push(key);
    }
  });

  return results;
}
