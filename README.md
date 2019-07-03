# CSS Methodologies Comparison Workshop
The goal is to create a simple component or page using different css methodologies, and that way learn a little bit more about them and explore their pros and cons. A short and simple guideline can be found here for easier and faster implementation.

## Task
Try to replicate the attached design to create parts of the page, or the whole page. Start with one methodology, and then move to others (short reminder and useful links can be found below). Use only one breakpoint (ex. 960px), for mobile and desktop view. Choose your own colors and fonts. For the images, use [placeholders](https://placeholder.com/). There is no need to use icons. While implementing, write down your thoughts, opinions, ideas and what you think are pros and cons of each methodology. Discuss all collected info and try to come up with some conclusions.

## Instructions
Download this project on your computer, open up the terminal, navigate to the root folder of this project and run ```npm install``` command. To start the webpack dev server, just run the script ```npm run start```, and index page will be immediately opened in the browser. From there you can navigate to three different html pages, one for each methodology. All markup, styles and javascript are found in the **src** folder and they are the ones which should be edited. The browser should refresh whenever you save changes in your code. If you make some changes inside the webpack.config.js file, you will need to start the script again.
#### Additional info:
* If you only want to build the project, just run the script ```npm run build```. The **dist** folder will be created with css and javascript bundled and included inside generated html pages. 
* All .scss and .css files are included in the corresponding .js files. If you need to add more sass or css files, or just want to use css instead of sass and vice versa, create those new files inside **src/styles** folder and just include them (add and/or remove) in wanted javascript files inside **src/scripts** folder.

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
    
```css
    /* Base */
    
    body, form {
      margin: 0;
      padding: 0;
    }
    
    a {
      color: #039;
    }
    
    a:hover {
      color: #03f;    
    }
```    
* **Layout**
  * Major components of the page
    * Header, footer, main section, etc.
    * Dividing a page into sections
  * ID selectors can be used, if wanted
  * Class selectors with prefixes
    * Usually l- or layout-
    * Separation from modules and states
    
```css
    /* Layout */
    
    #header, #article, #footer {
      width: 960px;
      margin: auto;
    }
    
    #article {
      border: solid #ccc;
      border-width: 1px 0 0;
    } 
``` 
* **Module**
  * Minor components of the page
    * Navigation bars, carousels, etc.
  * Inside layout components or other modules
  * Standalone components
  * Only class names
    * Name of the module without prefixes
    * Submodules - name of parent module as prefix with a dash
    
```css
    /* Module */
    
    .module > h2 {
      padding: 5px;
    }

    .module span {
      padding: 5px;
    }
```    
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
    
```css
    /* State */
    
    .tab {
      background-color: purple;
      color: white;
    }
    
    .is-tab-active {
      background-color: white;
      color: black;
    }    
``` 
* **Theme**
  * Redefining for alternate themes
    * How base, layout and modules will look in specific cases
      * Country, language, user customization, etc.
      * Colours, arrangement of elements, font size, typography, etc.
  * Usually for more complex websites
    * Not a core category, optional
  * Prefix theme- for specific theme components

```css
    /* Theme */
    
    /* in module.css */
    .mod {
      border: 1px solid;
    }
    
    /* in theme.css */
    .mod {
      border-color: blue;
    }
```

Useful links:
* http://smacss.com/
* https://vanseodesign.com/css/smacss-introduction/
* https://www.zaraffasoft.com/2016/09/20/organize-your-css-smacss/

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
    
```css
    /* Separate structure and skin/design */
    
    /* Bad example: */
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
    
    /* Good example: */
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
```
* **Separate container and content**
  * Content is placed inside container and shouldn’t be dependent of it
    * Object should look the same, wherever it’s placed
  * Containers are mostly represented by structure classes
  * No need to override styles

```css
    /* Separate container and content */
    
    /* Bad example: */
    #container {
      /* container styles */
    }
    
    #container .box {
      /* box styles */
    }
    
    #container .box-header {
      /* box-header styles */
    }
    
    /* Good example: */
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
* https://sass-lang.com/guide

