## Summary

This is an example usage of [Cypress] against [the-internet sandbox].

Note: Developed on/for Mac.  It _should_ work on other platforms, but caveat emptor.

## Requirements
- Chrome browser 
- NodeJS 6+

## Getting started
- From the project root, run `npm install`

## Execution
- To open the desktop app, from the project root, run `$(npm bin)/cypress open`
- Click the individual test you want to run or work on, or alternatively click 'Run All Tests'

### CLI options

- To run headlessly (with video): `npm run test:headless`
- To run in Chrome (without video): `npm run test:chrome`

## Troubleshooting
> Cypress install halts shortly before completion

This is normally caused by using a Node version <6.  Update and the install should work fine.

## Links
Cypress guides: https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html

Cypress examples: https://github.com/cypress-io/cypress-example-recipes

Cypress API guide: https://docs.cypress.io/api/introduction/api.html#


## TODO
- Add more test examples


[Cypress]: https://www.cypress.io/
[the-internet sandbox]: https://the-internet.herokuapp.com/