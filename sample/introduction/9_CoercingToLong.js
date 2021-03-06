var _ = require( 'wmathvector' );

var long1 = new F32x([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
var vector1 = _.vectorAdapter.fromLongLrangeAndStride( long1, 1, 3, 2 );
var long2 = _.avector.toLong( vector1 );

console.log( long2 );
/* log : [ 1, 3, 5 ] */
console.log( _.strType( long2 ) );
/* log : Float32Array */
