// https://medium.com/geekculture/node-js-and-factory-pattern-ddabcfe6541c
// Factory Method Pattern

class Screen {
  getScreenInfo = () => 'I am a screen'
}

class TouchScreen extends Screen {
  constructor() {
    super()
  }

  getScreenInfo = () => 'I am a touch screen'
}

class ProjectorScreen extends Screen {
  constructor() {
    super()
  }

  getScreenInfo = () => 'I am a projector screen'
}

// Factory pattern to instantiate exactly the class tha we want.
class ScreenFactory {
  static create(type) {
    switch(type) {
      case 'TouchScreen':
        return new TouchScreen();
      case 'ProjectorScreen':
        return new ProjectorScreen();
      default:
        return new Error('Screen type not supported');
    }
  }
}

// Running
// DISPLAY_TYPE=ProjectorScreen node src/design-patterns/factory.js

const display = ScreenFactory.create(process.env.DISPLAY_TYPE)
console.log(display.getScreenInfo())

const display2 = ScreenFactory.create('TouchScreen')
console.log(display2.getScreenInfo())