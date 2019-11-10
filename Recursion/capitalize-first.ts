function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }

  const newArr = capitalizeFirst(arr.slice(0, -1));
  const str =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  newArr.push(str);
  return newArr;
}
