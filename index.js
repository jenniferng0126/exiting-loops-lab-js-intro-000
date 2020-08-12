function breakOut(array, changeValue, stopValue) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  let found = false;
  let foundVal;
  for (let i=0; i<array.length; i++) {
    if(array[i] === findFn) {
      foundVal = array[i];
      found = true;
    }
  }
  if (!found) {
    return null;
  } else {
    return foundVal;
  }
}
