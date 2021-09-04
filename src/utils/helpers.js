export const box = {
  worker: 'BabunArtem',
  work: '',
  material: '',
  set addWork(value) {
    this.work = value;
  },
  set addMaterial(value) {
    this.material = value;
  },
  get workJob() {
    return `${this.worker} ${this.work} from ${this.material}`;
  },
};

const parent = {
  showFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const children = {
  firstName: 'Zoryana',
  lastName: 'Rozymna',
};

children.prototype = parent;

// class MyClass {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     showFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const copyMyClassName = new MyClass('Maxim', 'Logvyniuk')

// const viewMetod = (a) => {
//   console.info(a);

//   return false;
// };

export class Worker {
  calculationResult: null;

  concantinationResult: null;

  constructor(show) {
    this.showing = show;
  }

  // eslint-disable-next-line class-methods-use-this
  calculation(a, b) {
    const result = a + b;

    this.calculationResult = result;
  }

  // eslint-disable-next-line class-methods-use-this
  concantination(a, b) {
    const result = a + b;

    this.concantinationResult = result;
  }

  // eslint-disable-next-line class-methods-use-this
  showCalculationResult() {
    this.showing(this.calculationResult);
  }

  showConcatinationResult() {
    this.showing(this.concantinationResult);
  }
}
