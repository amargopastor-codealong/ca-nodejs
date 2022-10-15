import chalk from 'chalk';
import _ from 'lodash';

console.log(chalk.red('Bienvenid@ al sorteo de regencia para los reyes godos'));

const aspirantes = [
  'Alarico I',
  'Ataúlfo',
  'Sigérico',
  'Walia',
  'Teodorico',
  'Turismundo',
];
// const randomNumber = Math.ceil(Math.random() * aspirantes.length - 1);
// const ganador = aspirantes[randomNumber];
const ganador = _.sample(aspirantes);
console.log(chalk.blue(`El nuevo rey visigodo es ${ganador} 👑`));
