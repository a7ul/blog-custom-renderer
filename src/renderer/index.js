const CustomRenderer = {
  render(element, renderDom, callback) {
    // element: This is the react element for App component
    // renderDom: This is the host root element to which the rendered app will be attached.
    // callback: if specified will be called after render is done.
    console.log("render called", element, renderDom, callback);
  }
};

module.exports = CustomRenderer;
