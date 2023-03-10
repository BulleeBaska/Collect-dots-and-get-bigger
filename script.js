const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

// game constants
const DOT_SIZE = 10;
const STARTING_SPEED = 3;
const MAX_SPEED = 10;

// player properties
let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: STARTING_SPEED,
  size: DOT
