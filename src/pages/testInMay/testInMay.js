import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

// eslint-disable-next-line import/named
import { Worker } from '../../utils/helpers';

const viewMetod = (a) => {
  console.info(a);

  return false;
};

// class Worker {

//     constructor(show) {
//         this.showing = show
//     }

//     // eslint-disable-next-line class-methods-use-this
//     calculation(a, b) {
//         return a + b
//     }

//     // eslint-disable-next-line class-methods-use-this
//     concantination(a, b) {
//         return a + b
//     }

//      // eslint-disable-next-line class-methods-use-this
//     calculationResult() {
//         this.showing(this.calculation(23, 23))
//     }

//     concatinationResult() {
//         this.showing(this.concantination('test', 'me testing'))
//     }

// }

const workerTask = new Worker(viewMetod);

function Result() {
  const [data, setData] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      const newData = {
        ...prevState,
        [name]: value,
      };
      return newData;
    });
  }, []);

  console.info(workerTask);

  const showCalculation = useCallback(() => {
    console.info('data -', data);
    workerTask.calculation(Number(data.first), Number(data.second));
    return workerTask.showCalculationResult();
  }, [data]);

  const showConcatination = useCallback(() => {
    console.info('string -', data);
    workerTask.concantination(String(data.third), String(data.fourth));
    return workerTask.showConcatinationResult();
  }, [data]);

  return (
    <div>
      <Link to="/">Back</Link>
      <input type="text" name="first" onChange={onChange} value={data.first} />
      <input
        type="text"
        name="second"
        onChange={onChange}
        value={data.second}
      />
      <button type="button" onClick={showCalculation}>
        showCalculation
      </button>
      <input type="text" name="third" onChange={onChange} value={data.third} />
      <input
        type="text"
        name="fourth"
        onChange={onChange}
        value={data.fourth}
      />
      <button type="button" onClick={showConcatination}>
        showConcatination
      </button>
    </div>
  );
}

export default Result;
