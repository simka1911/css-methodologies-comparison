# CSS Methodologies Comparison Workshop
The goal is to create a simple component or page using different css methodologies, and that way learn a little bit more about them and explore their pros and cons. A short and simple guideline can be found here for easier and faster implementation.

## Design
The design example that will be used in this workshop can be found [here](https://dribbble.com/shots/1040647-TinyLove-Landing-Page/attachments/126310).

## SMACSS


## BEM

* BEM stands for **Block Element Modifier**
* **Block** - represents object on website
  * Independent, reusable part
  * Can contain elements and other blocks, and one or more modifiers
  * Short prefix for namespacing
  * Latin letters, digits and dashes
  * No tag names nor IDs
* **Element** - component within the block that performs particular function
  * Only has meaning inside the block, semantically thied to it
  * Can contain other elements and blocks, and one or more modifiers
  * Block name + two underscores + element name
  * Latin letters, digits, dashes and underscores
  * No tag names nor IDs
  * Independent from other blocks and elements
* **Modifier** - belongs on a block or element
  * Different state and behaviour than default
  * Nicely groupable using preprocessors
  * Block’s/element’s name + two dashes + modifier name
  * Latin letters, digits, dashes(for spaces) and underscores

Usage:

```css
    .block {}
    .block__element {}
    .block--modifier {}
    .block__element--modifier {}
```

Useful links:
* http://getbem.com/
* https://css-tricks.com/bem-101/

## OOCSS

