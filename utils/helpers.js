 const box = {
     worker: 'BabunArtem',
     work: '',
     material: '',
     set addWork (value) {
         this.work = value
     },
     set addMaterial (value) {
         this.material = value
     },
     get workJob() {
         return `${this.worker} ${this.work} from ${this.material}`
     }
 }

const parent = {
   showFullName() {
       return `${this.firstName } ${this.lastName}`
   },

} 

const children = {
   firstName: 'Zoryana',
   lastName: 'Rozymna',
}

// children?.__proto__ = parent

children.prototype = parent

class MyClass {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    showFullName() {
        return `${this.firstName} ${this.lastName}`
    }
} 

const copyMyClassName = new MyClass('Maxim', 'Logvyniuk')

