// require('file-loader?name=./index.html!index.html');
import './index.html';

import sum from './mylib/MyLib';


sum(4, 5, result => {
  console.log(result);
});