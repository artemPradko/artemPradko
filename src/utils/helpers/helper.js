// const initials = {
//   name: 'Artem',
//   born: 2010,
//   goToSchool: 2016,
// };

const initials2 = {
  name: 'Jonn',
  born: 1998,
  goToSchool: 2004,
};

function personalDescription(data) {
  // your code
  if (data.error) {
    return false;
  }
  if (data.name === 'Jonn') {
    return alert(`This is ${data.name}`);
  }
  const result = {
    wereIGoToSchool: `I go to school at ${data.goToSchool - data.born} years`,
  };

  return result;
}

function someElse(data) {
  // your code
  const result = {
    wereIGoToSchool: `I go to school at ${data.goToSchool - data.born}`,
  };
  return result;
}

const dataToDisplay = personalDescription(initials2);

console.info(dataToDisplay.wereIGoToSchool);

// function checkAge(age) {
//   const comfirmation = confirm('Родители разрешили?');
//   const checkAge2 = age > 18 ? true : comfirmation;

//   return checkAge2;
//  return (age > 18) || confirm('Родители разрешили?')
// }

// function min(a, b) {
//     if (a > b) {
//        return a
//     }
//      return b;
// }

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// }

const mockData = {
  title: 'Robot',
  size: 125,
  details: {
    dateOfRelize: new Date(),
    serias: 'Z',
  },
  cost: 3345,
  cours: 28,
};

function getDetails(params) {
  if (params.details.serias === 'Z') {
    console.info(params.details?.dateOfRelize);

    return params.cost * params.cours;
  }

  return false;
}

const dataCounter = (type, a, b, c) => {
  const box = {
    first: null,
    second: null,
    thirt: null,
  };

  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    box.first = a;
    box.second = b;
    box.thirt = c.toString();
  }

  const maxValue = 4;

  if (a > 0 && b > 0 && c > 0) {
    return a * b * c;
  }
  if (a < 0 || b < 0 || c < 0) {
    return a * c + b;
  }
  if ((a > 0 && a === maxValue) || b >= maxValue) {
    return a * b;
  }

  return false;
};

// eslint-disable-next-line no-magic-numbers
dataCounter('count', 9, 1, 4);

getDetails(mockData);

export { personalDescription, someElse };
