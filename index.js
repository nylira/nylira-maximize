(function(){
'use strict'

// this function allows you to maximize an element to fill the page.
function maximizeElement(element, width, height) {
  var x, y

  // if the element is landscape
  if(width > height) {
    x = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    y = x * height / width

  // if the element is portrait
  } else {
    y = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    x = y * width / height
  }

  // set the element's width and height
  element.style.width = x + 'px'
  element.style.height = y + 'px'
}

module.exports = maximizeElement

}())
