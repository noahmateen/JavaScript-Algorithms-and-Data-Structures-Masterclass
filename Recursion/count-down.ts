function countDown(num) {
  if (num <= 0) {
    console.log('All done');
  }
  console.log(num);
  num--;
  countDown(num);
}
