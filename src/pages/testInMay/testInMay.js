import React from 'react';

import { Link } from 'react-router-dom';


 const showWorker = (a) => {
    
    console.info(a)
 
    return false;
}

class Worker {

    constructor(show) {
        this.showing = show
    }

    // eslint-disable-next-line class-methods-use-this
    calculation(a, b) {
        return a + b
    }

    // eslint-disable-next-line class-methods-use-this
    concantination(a, b) {
        return a + b
    }
    
     // eslint-disable-next-line class-methods-use-this
    calculationResult() {
        this.showing(this.calculation(23, 23))
    }

    concatinationResult() {
        this.showing(this.concantination('test', 'me testing'))
    }  

}


const results = new Worker(result)

function result() {
    console.info(results)
    return(
        <div>
            <Link to="/">Back</Link> 
            
        </div>
    )
}

export default result;