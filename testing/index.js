function parse(input) {
  var characters = input.split("");
  var result = characters.map(function(char) {
    if (char === "(") {
      return "UP";
    } else if (char === ")") {
      return "DOWN";
    }
  });

  return result;
}

function move(input) {
  var floor = 0;

  var directions = parse(input);

  for (var i = 0; i < directions.length; i++) {
    var currentDirection = directions[i];

    if (currentDirection === "UP") {
      floor += 1;
    } else if (currentDirection === "DOWN") {
      floor -= 1;
    }
  }

  return floor;
}

module.exports = {
  parse: parse,
  move: move
};
