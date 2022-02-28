// javaScript

// Tezlik cheklovi ->  70km/soat
// 5km/soat ->1 point
//12 point ->guvohnoma olib qoyiladi.

const spitLimit = 70;
const pints=
function checkspeed() {
  if (speed < spitLimit) {
    console.log("Ok");
  } else {
    let pints = (speed - spitLimit) / 5;
  }
}
