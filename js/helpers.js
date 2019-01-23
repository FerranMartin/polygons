Math.radians = function(degrees) {
  return (degrees * Math.PI) / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return (radians * 180) / Math.PI;
};

function distanceBetweenPoints(p1, p2) {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  return Math.sqrt(a * a + b * b);
}

function makePolygon({ position, numSides, radius, rotationDegrees = 0 }) {
  // Create a polygon points
  const points = [];
  for (var i = 0; i < numSides; i++) {
    const theta = (2 * Math.PI * i) / numSides - Math.radians(rotationDegrees);
    const point = {
      x: position.x + radius * Math.sin(theta),
      y: position.y - radius * Math.cos(theta)
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

  //   const dashSize = distanceBetweenPoints(points[0], points[1]) * numSides;
  //   poly.setAttribute("stroke-dasharray", dashSize);

  // Add it to the SVG
  document.getElementById("mysvg").appendChild(poly);

  // Return polygon element
  return poly;
}

function makeCircle({ position, radius, visible = false }) {
  // Create a circle element
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", position.x);
  circle.setAttribute("cy", position.y);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "orange");
  circle.setAttribute("stroke-dasharray", 4);
  const strokeWidth = visible ? 0.5 : 0;
  circle.setAttribute("stroke-width", strokeWidth);

  // Add it to the SVG
  document.getElementById("mysvg").appendChild(circle);

  // Return circle element
  return circle;
}
