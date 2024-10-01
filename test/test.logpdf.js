/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var logpdf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y;

	y = logpdf( NaN, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+Infinity` if provided `x` equal to `mu`', function test( t ) {
	var y;

	y = logpdf( 2.0, 2.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	y = logpdf( 0.0, 0.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	y = logpdf( -3.0, -3.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	t.end();
});

tape( 'the function returns `-Infinity` if provided `x` not equal to `mu`', function test( t ) {
	var y;

	y = logpdf( 2.0, 3.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpdf( 4.0, 3.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	t.end();
});
