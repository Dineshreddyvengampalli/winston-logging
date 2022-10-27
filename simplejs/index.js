const logger = require("./logger/logger")

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    }
  }
  
  try {
    getRectArea(3, 'A');
  } catch (e) {
    logger.exceptions(e);
  }
  