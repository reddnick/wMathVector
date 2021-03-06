var _ = require( 'wmathvector' );

var buffer1 = new F32x([ 1, 2, 3, 4, 5, 6, 7 ]);
var buffer2 = new F32x([ 4, 5, 6 ]);
var vector1 = _.vectorAdapter.from( buffer1, 1, 3 );
var vector2 = _.vectorAdapter.from( buffer2 );

console.log( vector1.toStr() );
/* log : "2.000, 3.000, 4.000" */
console.log( vector2.toStr() );
/* log : "4.000, 5.000, 6.000" */

_.vectorAdapter.add( vector1, vector2 );

console.log( vector1.toStr() );
/* log : "6.000, 8.000, 10.000" */
console.log( vector2.toStr() );
/* log : "4.000, 5.000, 6.000" */

console.log( vector1 );
/* log : [ 1, 6, 8, 10, 5, 6, 7 ] */
console.log( vector2 );
/* log : [ 4, 5, 6 ] */
