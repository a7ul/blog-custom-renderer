const Reconciler = require("react-reconciler");

const HostConfig = {
  now: Date.now,
  getRootHostContext: function(nextRootInstance) {
    let rootContext = {};
    return rootContext;
  },
  getChildHostContext: function(parentContext, fiberType, rootInstance) {
    let context = { type: fiberType };
    return context;
  },
  shouldSetTextContent: function(type, nextProps) {
    return false;
  },
  createTextInstance: function(
    newText,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {
    return document.createTextNode(newText);
  },
  createInstance: function(
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {
    const element = document.createElement(type);
    element.className = newProps.className || "";
    element.style = newProps.style;
    // ....
    // ....
    if (newProps.onClick) {
      element.addEventListener("click", newProps.onClick);
    }
    return element;
  },
  appendInitialChild: (parent, child) => {
    parent.appendChild(child);
  },
  finalizeInitialChildren: (
    instance,
    type,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) => {
    return newProps.autofocus; //simply return true for experimenting
  },
  prepareForCommit: function(rootContainerInstance) {},
  resetAfterCommit: function(rootContainerInstance) {},
  commitMount: (domElement, type, newProps, fiberNode) => {
    domElement.focus();
  },
  appendChildToContainer: (parent, child) => {
    parent.appendChild(child);
  },
  supportsMutation: true,
  prepareUpdate: function(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    return; //return nothing.
  },
  commitUpdate: function(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    return; //return nothing.
  },
  commitTextUpdate: function(textInstance, oldText, newText) {
    textInstance.nodeValue = newText;
  },
  appendChild: function(parentInstance, child) {
    parentInstance.appendChild(child);
  },
  insertBefore: (parentInstance, child, beforeChild) => {
    parentInstance.insertBefore(child, beforeChild);
  },
  removeChild: function(parentInstance, child) {
    parentInstance.removeChild(child);
  },
  insertInContainerBefore: function(container, child, beforeChild) {
    container.insertBefore(child, beforeChild);
  },
  removeChildFromContainer: function(container, child) {
    container.removeChild(child);
  },
  resetTextContent: function(domElement) {},
  shouldDeprioritizeSubtree: function(type, nextProps) {
    return !!nextProps.hidden;
  }
};

const reconcilerInstance = Reconciler(HostConfig);

const CustomRenderer = {
  render(element, renderDom, callback) {
    // element: This is the react element for App component
    // renderDom: This is the host root element to which the rendered app will be attached.
    // callback: if specified will be called after render is done.

    const isAsync = false; // Disables async rendering
    const container = reconcilerInstance.createContainer(renderDom, isAsync); // Creates root fiber node.

    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconcilerInstance.updateContainer(
      element,
      container,
      parentComponent,
      callback
    ); // Start reconcilation and render the result
  }
};

module.exports = CustomRenderer;
