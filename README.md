# License generator

Generates a license for your open source project. See [choosealicense.com](http://choosealicense.com).

## Installation

    npm install license-generator

## Usage

Generate a license

    $ license-generator install LICENSE -y YEAR -n FULLNAME -e EXTENSION

View a license

    $ license-generator view LICENSE

## Options

    -y, --year The year to use. Example 2014.
    -n, --fullname The fullname to use in the license.
    -p --project The name of the project to use in the license.
    -e, --extension The file extension for the license. Example: txt. Defaults to no extension.

## Examples

    $ license-generator install mit -y 2014 -n "John Doe" -e txt
    $ license-generator view mit

## Available licenses

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
