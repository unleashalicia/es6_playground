

import  * as math from './calc';

console.log('math: ', math);

//import addStuff, {subtract, multiply} from './calc';

console.log('5+7=', math.default(5,7));

console.log('8-9=', math.subtract(8,9));

console.log('3*12=', math.multiply(3,12));