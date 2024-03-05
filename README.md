# Continuous Scroll Tutorial

Continous horizontal scrolling is a common web-deveelopment technique and is used to display
a high quantity of items in a more visually appearing way. In this tutorial we will break down 
the steps to achieve this technique using HTML, CSS and JavaScript.

## HTML Structure


```html
<div class="scroll">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <!-- Add more items as needed -->
</div>
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
  display: inline-block;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  background-color: #ccc;
  text-align: center;
  line-height: 200px;
}
```

#### Breaking it down:

  over-flow-x: auto - Enables horizontal flow if the content exceeds the container.

  overscroll-behavior-inline: contain - Prevents browser from performing any extra scrolling effects (stretching of content).

  white-space: nowarap - All content within the container stays on one line.

## JavaScript Structure

```javascript
const scrollContainer = document.querySelector('.scroll-container');
const firstBoxes = document.querySelectorAll('.box');

function copyAndPasteContent() {
  firstBoxes.forEach(item => {
    const clone = item.cloneNode(true);
    scrollContainer.appendChild(clone);
  });
}

scrollContainer.addEventListener('scroll', () => {
  const lastItem = scrollContainer.lastElementChild;
  const lastItemRect = lastItem.getBoundingClientRect();

  if (lastItemRect.right <= window.innerWidth) {
    copyAndPasteContent();
  }
});
copyAndPasteContent();
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

[Click here](http://127.0.0.1:5500/Assignments/lubunga-sadi-assignment-3/index.html) to test the application
