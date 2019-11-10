function logFile(fileSize, logs) {
  // Create data structure for letter logs and digit logs
  let letterLogs = [];
  let digitLogs = [];
  // Regex to determine if evaluated char is digit
  let isDigitLogRegex = /\d/g;
  // Iterate over logs and add them to the corresponding arrays;
  for (let log of logs) {
    // Split the log into an array to separate the id from the log
    let logArr = log.split(' ');
    // Push to digit array
    if (isDigitLogRegex.test(logArr[1])) digitLogs.push(log);
    // Push to string array
    else letterLogs.push(log);
  }

  // Now need to sort letterLogs in place
  letterLogs.sort((a, b) => {
    let firstLogString = a
      .split(' ')
      .slice(1)
      .join(' ');
    let secondLogString = b
      .split(' ')
      .slice(1)
      .join(' ');
    // Check if they are lexicographically the same
    if (firstLogString.localeCompare(secondLogString) === 0) {
      // Use identifier to pick
    } else {
      return firstLogString.localeCompare(secondLogString);
    }
  });

  // Concat the digit array onto the now sorted string array;
  return letterLogs.concat(digitLogs);
}
