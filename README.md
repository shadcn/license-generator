license-generator
=================

Generates a license for your open source project. See [choosealicense.com](http://choosealicense.com).

Installation
--------------

    npm install license-generator

Usage
--------------

Generate a license

    $ license-generator install LICENSE -y YEAR -n FULLNAME -e EXTENSION

View a license

    $ license-generator view LICENSE
    
Options
--------------

    -y, --year The year to use. Example 2014.
    -n, --fullname The fullname to use in the license.
    -p --project The name of the project to use in the license.
    -e, --extension The file extension for the license. Example: txt. Defaults to no extension.

Examples
--------------

    $ license-generator install mit -y 2014 -n "John Doe" -e txt
    $ license-generator view mit

Available licenses
--------------

    agpl
    apache
    artistic
    bsd-3-clause
    bsd
    cc0
    eclipse
    gpl-v2
    gpl-v3
    lgpl-v2.1
    lgpl-v3
    mit
    mozilla
    no-license
    unlicense
    wtfpl
    
License
--------------

The MIT License (MIT)

Copyright (c) 2014 Arshad Chummun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
