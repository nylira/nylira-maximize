# nylira-maximize

nylira-maximize is a simple function that maximizes the specified DOM element to your preferred aspect ratio. 

## Use it

Install with NPM:

    $ npm install nylira-maximize

Example usage:

    var maximize = require('nylira-maximize')
    var gameCanvas = document.getElementById('gameCanvas')

    maximize(gameCanvas, 1920, 1080)

This example will resize the `#gameCanvas` element to fill the screen horizontally. It will also keep the 16:9 aspect ratio.

The `1920, 1080` parameters are WIDTH and HEIGHT respectively. The function uses WIDTH and HEIGHT to get your aspect ratio.

## License

MIT
