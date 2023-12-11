# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Completed this in place of SCRIMBA's Pager Solo Project, as this seems more real life at this time.
https://scrimba.com/scrim/cocca4f86af5ed54af0497ea7

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](/images/screenshot.jpeg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://baileysbounty.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Recap over some of learnings while working through this project.

First, i like the UI/UX design.  The bulldog logo really looks great to me.

Tried to use min and max and required to validate correct input
```html
<input type="text" inputmode="numeric" pattern="[0-9]*" id="month-input-el" placeholder="MM" min="1" max="12" minlength="2" maxlength="2" required>
```

Made this up to look like the frontend mentor colors...not too bad.
```css
background: linear-gradient(to bottom, var(--very-dark-violet), #3F0EAA, #1E0633);
```

used position absolute to place front and back cards.  Must be a better way?
```css
.card-front {
    position: absolute;
    top: 100px;
    left: 60px;
}

.card-back {
    position: absolute;
    top: 330px;
    left: 100px;
}
```

A lot of @media for small screens. There has to be a better way?
```css
    .body {
        height: 100vh;
    }

    .mobile {
        background: url("/images/bg-main-mobile.png") norepeat center center/cover;
        height: 300px;
    }
```

used .trim to take out any white spaces user enters.
```js
cardHolderInput.value.trim()
```

Relearned setTimeout, like how it displays error msg then disappears.
```js
        setTimeout(() => {
            messageError.textContent = ""
        }, 2000)
```

This was a new snippet for me. Format the numeric card number with spaces every four characters.
```js
function formatCardNumber(cardNum) {    
    return cardNum.replace(/(\d{4})(?=\d)/g, '$1 ')
  }
```

### Continued development

Need to learn how to validate form input like dates; days, months, years, time etc.

There has to be a better, more robust way to use CSS to style to make the card faces more adjustable without all the position:absolutes.


### Useful resources

- [Frontend mentor challenges](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub) - This helped me for working on SCRIMBA's Module 3, Pager Solo Project. I really liked this real world problem.
- [Scrimba Module 3 Pager Project](https://scrimba.com/scrim/co9b447f7b7a0dc6201d27636) - This is the Module 3 Pager solo project. I liked the bank credit card idea more, and it semmed like the same learnings so adabpted it for this project.

## Author

- Website - [Emmett Pennington](https://www.COMINGSOON)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/egpennington)
- Twitter - [@yourusername](https://www.twitter.com/emmettpenn23)

## Acknowledgments

Scrimba's frontend development boot camp is well organized and takes me on a well organized and layout plan that has each lesson build off of the previous lessons.
