function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "hello , i am testing webpack-dev-server!!!ddgg5555555  hello yangdan"
  
    return element;
  }
  
  document.body.appendChild(component());