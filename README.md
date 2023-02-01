<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Degenerate distribution][degenerate-distribution] logarithm of [probability density function][pdf] (logPDF).

<section class="intro">

Strictly speaking, as a discrete distribution, a [degenerate][degenerate-distribution] has no [probability density function][pdf] (PDF). Extending the notion of a [PDF][pdf], we conceptualize the [PDF][pdf] of a [degenerate][degenerate-distribution] distribution as an infinitely tall spike centered at `mu`. More formally,

<!-- <equation class="equation" label="eq:degenerate_pdf" align="center" raw="f(x;\mu) = \delta(x-\mu)" alt="Probability density function (PDF) for a degenerate distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu) = \delta(x-\mu)" data-equation="eq:degenerate_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/logpdf/docs/img/equation_degenerate_pdf.svg" alt="Probability density function (PDF) for a degenerate distribution.">
    <br>
</div>

<!-- </equation> -->

where `delta` is the Dirac delta function.

<!-- <equation class="equation" label="eq:dirac_delta" align="center" raw="\delta(x) = {\begin{cases}+\infty , & x = 0\\0, & x \neq 0\end{cases}}" alt="Dirac delta function."> -->

<div class="equation" align="center" data-raw-text="\delta(x) = {\begin{cases}+\infty , &amp; x = 0\\0, &amp; x \neq 0\end{cases}}" data-equation="eq:dirac_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/logpdf/docs/img/equation_dirac_delta.svg" alt="Dirac delta function.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@esm/index.mjs';
```

#### logpdf( x, mu )

Evaluates the natural logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logpdf( 2.0, 8.0 );
// returns -Infinity

y = logpdf( 8.0, 8.0 );
// returns Infinity
```

#### logpdf.factory( mu )

Returns a function for evaluating the natural logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mylogpdf = logpdf.factory( 10.0 );

var y = mylogpdf( 10.0 );
// returns Infinity

y = mylogpdf( 5.0 );
// returns -Infinity

y = mylogpdf( 12.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@esm/index.mjs';

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = logpdf( x, mu );
    console.log( 'x: %d, µ: %d, ln(f(x;µ)): %d', x, mu, y );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-degenerate-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-degenerate-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-degenerate-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-degenerate-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-degenerate-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-degenerate-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-logpdf/blob/main/branches.md

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
