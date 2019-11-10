var solution = function(input) {
  var map = {};
  /*think there is count for opposite pairs var pairs = 0*/
  for (var i = 0; i < input.length; i++) {
    var num = input[i];
    if (map[7 - num]) {
      /*if opposite, then pairs++, but we remove the number in pair from map*/
      map[7 - num] = map[7 - num] - 1;
    } else if (map[num]) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }

  /*for now, the remaining nums in the map are for sure not in a pair situation, who has the most apperance, we gonna convert the rest to it*/
  var max = 0;
  for (var num in map) {
    max = Math.max(map[num], max);
  }

  /*for easier understanding, the equation is actually (intput.length - pairs * 2 - max)(these are numbers need to move 1s) + pairs * 2(pairs need 2 moves)*/
  return input.length - max;
};
