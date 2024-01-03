const targetObject = {
  // Original Object
  name: "aflu",
  age: 29,
};

const handler = {
  //Get trap: Custom behavior when accessing properties
  get(target, property) {
    
    console.log(`Getting property "${property}" |-> target = ${JSON.stringify(target)}`);
    return target[property];
  },

  //Set trap: Custom behavior when setting properties
  set(target, property, value) {
    console.log(`Setting property "${property}" to ${value}`);
    target[property] = value;
  },
};

// create proxy using the orginal object and the handler
const proxyObject=new Proxy(targetObject,handler)

// Accessing properties triggers the get trap
console.log(proxyObject.name,` _ _`); // Getting property "name"

proxyObject.age=30
