function addObjectProperty(obj1, key, obj2) {
    // your code here
    /* START SOLUTION */
    obj1[key] = obj2
    /* END SOLUTION */
}




var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  addObjectProperty(person1, 'manager', person2);
  console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }