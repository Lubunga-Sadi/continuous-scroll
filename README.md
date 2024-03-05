# Continuous Scroll Tutorial

Continous horizontal scrolling is a common web-deveelopment technique and is used to display
a high quantity of items in a more visually appearing way. In this tutorial we will break down 
the steps to achieve this technique using HTML, CSS and JavaScript.

## HTML Structure


```html
<section class="scroll flex">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
  <div class="box">Item 4</div>
  <div class="box">Item 5</div>
  <div class="box">Item 6</div>
  <div class="box">Item 7</div>
  <!-- Add more items as needed -->
</section> 
```

#### The HTML would have the most basic elements:

1. Create a parent div with the class "scroll" within your body section.

2. Within that parent add the content that you desire

## CSS Structure

```css
.scroll {
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  white-space: nowrap;
}

.box {
  position: relative;
  display: inline-block;
  height: 200px;
  flex: 0 0 400px;
  max-width: 400px;
  background-color: #fff;
  text-align: center;
  line-height: 200px;
  margin: 0 15px 20px 0;
}

/*
::-webkit-scrollbar {
  display: none;
}*/
```

#### Breaking it down:

  over-flow-x: auto - Enables horizontal flow if the content exceeds the container.

  overscroll-behavior-inline: contain - Prevents browser from performing any extra scrolling effects (stretching of content).

  white-space: nowarap - All content within the container stays on one line.

  ::-webkit-scrollbar: - Control the style of the default scrollbar.

## JavaScript Structure

```javascript
'use strict';

const scrollContainer = document.querySelector('.scroll');
const firstBoxes = document.querySelectorAll('.box');

  // Function to copy and paste the first set of boxes
function cloneAndAppendFirstBoxes() {
  firstBoxes.forEach(box => {
    const clone = box.cloneNode(true);
    scrollContainer.appendChild(clone);
  });
}

// Detect when scrolling reaches the end
scrollContainer.addEventListener('scroll', () => {
  const lastBox = scrollContainer.lastElementChild;
  const lastBoxRect = lastBox.getBoundingClientRect();
  if (lastBoxRect.right <= window.innerWidth) {
    cloneAndAppendFirstBoxes(); // copy and paste when reaching the end
  }
});
```
#### Breaking it down:

1. cloneAndAddContent - This function goes over every box and creates a deep clone
   which then gets added to the scrollContainer.

2. scrollContainer - When the user scrolls the function calculates the the position of 
   the last box relative to the viewport using 'getBoundingClientRect()'

3. If the right edge of the last box is less than or equal to the width of the viewport 
   (window.  innerWidth), it means the user has scrolled to the end. 

4. When the end is reached the content is cloned and appended via the copyAndPasteContent()
   function. Creating a continous scroll effect.

## Demo

[Click here](https://lubunga-sadi.github.io/continuous-scroll/) to test the application