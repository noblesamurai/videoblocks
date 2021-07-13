# Videoblocks [![Build Status](https://secure.travis-ci.org/noblesamurai/videoblocks.png?branch=master)](http://travis-ci.org/noblesamurai/videoblocks) [![NPM version](https://badge-me.herokuapp.com/api/npm/videoblocks.png)](http://badges.enytc.com/for/npm/videoblocks)

> Iteract with videoblocks API.

## Purpose

Gives a wrapped version of
[request-promise-native](https://github.com/request/request-promise-native)
that is authed with your videoblocks credentials so you can conveniently make
calls to the videoblocks API.

## Prerequisites

```
$ pip install pre-commit
```

## Installation

```
$ pre-commit install --install-hooks
```

## Usage

```js
const videoblocks = require('videoblocks')({
  publicKey: 'public',
  privateKey: 'private'
});

const response = await videoblocks('/endpoint');
console.log(response);
```

## API

<a name="videoblocks
Returns a wrapped version of request-promise-native that is authed to
interact with videoblocks API.module_"></a>

## videoblocks
Returns a wrapped version of request-promise-native that is authed to
interact with videoblocks API. ⇒ <code>function</code>
- config
  - config.privateKey
  - config.publicKey
- endpoint - the endpoint you wish to use, e.g. '/api/v1/stock-items/search'
- opts - additional options for request-native-promise.  These will take
  precedence over anything we derive.

**Returns**: <code>function</code> - function(endpoint, opts)
**Params**: <code>object</code> config

Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install videoblocks
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

