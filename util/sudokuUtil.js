import { seeds } from '../data/seed';

export const createGame = difficulty => {
  const seedIndex = Math.floor(Math.random() * seeds[difficulty].length);
  return randomize(parseGameSeed(seeds[difficulty][seedIndex]));
}

const parseGameSeed = seed => seed.split('').reduce((result, char) => {
  return {
    board: `${result.board}${isNaN(char) ? '0' : char}`,
    solution: `${result.solution}${isNaN(char) ? char.charCodeAt() - 64 : char}`
  };
}, {board: '', solution: ''});

const randomize = (seed) => {
  let board = toMatrix(seed.board);
  let solution = toMatrix(seed.solution);
  let rotationCount = Math.floor(Math.random() * 4);

  while(rotationCount-- > 0) {
    board = rotate(board);
    solution = rotate(solution);
  }

  const randomDictionary = getRandomDictionary();
  return {
    board: tokenize(toString(board), randomDictionary),
    solution: tokenize(toString(solution), randomDictionary),
  };
};

const tokenize = (game, dictionary) => game.split('').map(
  char => dictionary[char]
).join('');

const getRandomDictionary = () => {
  let values = '123456789';
  let dict = { 0:0 };
  for(let i = 1; i <= 9; i++) {
    let value = values[Math.floor(Math.random() * values.length)];
    dict[i] = value;
    values = values.replace(value, '');
  }
  return dict;
};

const toMatrix = game => game.match(/.{1,9}/g).map((row) => row.split(''));

const rotate = matrix => transpose(matrix).map((row) => row.reverse());

const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

const toString = matrix => matrix.map(row => row.join('')).join('');
