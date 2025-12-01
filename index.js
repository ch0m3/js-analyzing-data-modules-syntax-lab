//create a function that merges all usernames into one
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users:[]
  };

  for (const userArray of args){
    combinedObject.users.push(...userArray)
  }
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');

  return combinedObject;
}

module.exports = { combineUsers };

const result =combineUsers(
  ['alice', 'kennedy'],
  ['mzesh'],
  ['babe', 'rico']
);

console.log(result);

