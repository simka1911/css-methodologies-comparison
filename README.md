# CSS Methodologies Comparison Workshop
The goal is to create a simple component or page using different css methodologies, and that way learn a little bit more about them and explore their pros and cons. A short and simple guideline can be found here for easier and faster implementation.

## Design
The design example that will be used in this workshop can be found [here](https://dribbble.com/shots/1040647-TinyLove-Landing-Page/attachments/126310).

## SMACSS
* SMACSS stands for **Scalable and Modular Architecture for CSS**

* **Base**
  * Default styling of main website elements
  * Applied directly to element selectors (body, a, etc.)
    * Class or ID selectors shouldn’t be used
    * Descendent selectors, child selectors, etc. are allowed
    * Pseudo-classes are allowed
    
* **Layout**
  * Major components of the page
    * Header, footer, main section, etc.
    * Dividing a page into sections
  * ID selectors can be used, if wanted
  * Class selectors with prefixes
    * Usually l- or layout-
    * Separation from modules and states
    
* **Module**
  * Minor components of the page
    * Navigation bars, carousels, etc.
  * Inside layout components or other modules
  * Standalone components
  * Only class names
    * Name of the module without prefixes
    * Submodules - name of parent module as prefix with a dash
    
* **State**
  * Various states possible for each element
    * active/inactive, hidden/expanded, etc.
    * Global state rules 
    * Rules related to specific module/layout
      * Should reside with module rules
  * Single class selector with is- prefix 
    * Include module name in it for specific module/layout case
  * Overriding previous style
    * !important can be used with caution
  * State styles indicate a javascript dependency
  * Changing state
    * Class names
      * CSS Animation
    * Pseudo-classes
    * Media queries

* **Theme**
  * Redefining for alternate themes
    * How base, layout and modules will look in specific cases
      * Country, language, user customization, etc.
      * Colours, arrangement of elements, font size, typography, etc.
  * Usually for more complex websites
    * Not a core category, optional
  * Prefix theme- for specific theme components

Usage:

```css
    /* Base */
    
    /* Layout */
    
    /* Module */
    
    /* State */
    
    /* Theme */
```

Useful links:
* http://smacss.com/
* https://vanseodesign.com/css/smacss-introduction/

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
    .block {
      /* block styles */
    }
    .block__element {
      /* element styles */
    }
    .block--modifier {
      /* block modifier styles */
    }
    .block__element--modifier {
      /* element modifier styles */
    }
```

Useful links:
* http://getbem.com/
* https://css-tricks.com/bem-101/

## OOCSS
* OOCSS stands for **Object Oriented CSS**

* **Separate structure and skin/design**
  * Define visual features of an element as a separate skin, that can be combined with various objects
    * Less code, repetition
  * Structure refers to element’s position and sizing
    * Width, height, padding, margin, overflow
  * Skin refers to element’s visual features
    * Colors, fonts, gradients, shadows

* **Separate container and content**
  * Content is placed inside container and shouldn’t be dependent of it
    * Object should look the same, wherever it’s placed
  * Containers are mostly represented by structure classes
  * No need to override styles

Usage:

```css
    /* Separate structure and skin/design */
    
    /* Bad example */
    .buttonSmall {
      width: 90px;
      height: 30px;
      border-color: #ccc;
      background: #fff;
    }
    .buttonLarge {
      width: 150px;
      height: 50px;
      border-color: #ccc;
      background: #fff;
    }
    
    /* Good example */
    .buttonSmall {
      width: 90px;
      height: 30px;
    }
    .buttonLarge {
      width: 150px;
      height: 50px;
    }
    .buttonSkin {
      border-color: #ccc;
      background: #fff;
    }
    
    /* Separate container and content */
    
    /* Bad example */
    #container {
      /* container styles */
    }
    #container .box {
      /* box styles */
    }
    #container .box-header {
      /* box-header styles */
    }
    
    /* Good example */
    .container {
      /* container styles */
    }
    .box {
      /* box styles */
    }
    .box-header {
      /* box-header styles */
    }
```

Useful links:
* https://github.com/stubbornella/oocss/wiki
* https://github.com/stubbornella/oocss-code-standards
* https://github.com/stubbornella/oocss-accessibility-guidelines
* https://www.keycdn.com/blog/oocss

