function makePolygon({ position, numSides, size }) {
  // Create a polygon points
  const points = [];
  for (var i = 0; i < numSides; i++) {
    const point = {
      x: position.x + size * Math.sin((2 * Math.PI * i) / numSides),
      y: position.y + size * Math.cos((2 * Math.PI * i) / numSides)
    };
    points.push(point);
  }

  const parsedPoints = _.reduce(
    points,
    (parsedPoints, point) => `${parsedPoints} ${point.x},${point.y}`,
    ""
  );

  // Create a polygon element
  const poly = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  poly.setAttribute("points", parsedPoints);

  // Add it to the SVG
  document.getElementById("mysvg").appendChild(poly);

  // Return polygon element
  return poly;
}

function makeCircle({ position, size, visible = false }) {
  // Create a circle element
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", position.x);
  circle.setAttribute("cy", position.y);
  circle.setAttribute("r", size);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("stroke-dasharray", 4);
  const strokeWidth = visible ? 0.5 : 0;
  circle.setAttribute("stroke-width", strokeWidth);

  // Add it to the SVG
  document.getElementById("mysvg").appendChild(circle);

  // Return circle element
  return circle;
}

letters = {
  a: 3,
  b: 4,
  c: 5,
  d: 6,
  e: 7,
  f: 8,
  g: 9,
  h: 10,
  i: 11,
  j: 12,
  k: 13,
  l: 14,
  m: 15,
  n: 16,
  o: 17,
  p: 18,
  q: 19,
  r: 20,
  s: 21,
  t: 22,
  u: 23,
  v: 24,
  w: 25,
  x: 26,
  y: 28,
  z: 29
};

function drawName({ name, position, size, showCircle = false }) {
  makeCircle({ position, size, visible: showCircle });

  const charPolys = {};
  for (var i = 0; i < name.length; i++) {
    const char = name.charAt(i);
    const poly = makePolygon({ position, numSides: letters[char], size });

    if (!charPolys[char]) {
      charPolys[char] = [];
    }
    charPolys[char].push(poly);
  }
}

const size = 200;
const eniaPos = { x: 250, y: 250 };
const aramPos = { x: 750, y: 250 };

drawName({ name: "enia", position: eniaPos, size, showCircle: true });
drawName({ name: "aram", position: aramPos, size, showCircle: true });
