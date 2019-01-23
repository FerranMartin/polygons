const letters = {
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
const LETTERS_OFFSET = 3;

const BIG_CHARS_BREAKPOINT = letters.l;

function drawName({ name, position, radius, showCircle = false }) {
  makeCircle({ position, radius, visible: showCircle });

  let numberOfBigChars = 0;
  let bigCharsOffset = radius * 0.05;

  for (var i = 0; i < name.length; i++) {
    const char = name.charAt(i);
    const numSides = letters[char] + LETTERS_OFFSET;
    const polyPosition = _.clone(position);
    const rotationDegrees = (360 / (name.length + 1)) * i;

    if (numSides >= BIG_CHARS_BREAKPOINT) {
      if (numberOfBigChars) {
        switch (numberOfBigChars % 4) {
          case 0:
            polyPosition.x += bigCharsOffset;
            polyPosition.y += bigCharsOffset;
            break;

          case 1:
            polyPosition.x += bigCharsOffset;
            polyPosition.y -= bigCharsOffset;
            break;

          case 2:
            polyPosition.x -= bigCharsOffset;
            polyPosition.y -= bigCharsOffset;
            break;

          case 3:
            polyPosition.x -= bigCharsOffset;
            polyPosition.y += bigCharsOffset;
            break;
        }

        bigCharsOffset += 2;
      }
      numberOfBigChars++;
    }

    makePolygon({ position: polyPosition, numSides, radius, rotationDegrees });
  }
}

const radius = 150;
const eniaPos = { x: 250, y: 250 };
const aramPos = { x: 750, y: 250 };

drawName({ name: "enia", position: eniaPos, radius, showCircle: true });
drawName({ name: "aram", position: aramPos, radius, showCircle: true });

drawName({
  name: "abcdefghijklmnopqrstuvwxyz",
  position: { x: 250, y: 750 },
  radius,
  showCircle: true
});

drawName({
  name: "zyxwvutsrqponmlkjihgfedcba",
  position: { x: 750, y: 750 },
  radius,
  showCircle: true
});

drawName({
  name: "c",
  position: { x: 250, y: 1250 },
  radius,
  showCircle: true
});
