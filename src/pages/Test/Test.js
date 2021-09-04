import React, { useCallback, useState } from 'react';

function Test() {
  const inichial = {
    value1: null,
    value2: null,
    user: null,
    say: null,
    results: null,
  };

  const [count, setCount] = useState(inichial);

  const calculate = useCallback(() => {
    let result;

    console.info('calculete', count);

    if (Number(count.value1) === '8' && Number(count.value2) === '2') {
      result = count.value1 / count.value2;
    }
    // eslint-disable-next-line no-magic-numbers
    if (count.value1 === 45 && count.value2 === 27) {
      result = count.value1 - count.value2;
    }
    // eslint-disable-next-line no-magic-numbers
    if (count.value1 === 4 && count.value2 === 10) {
      result = count.value1 * count.value2;
    } else {
      // eslint-disable-next-line no-magic-numbers
      result = 987;
    }

    setCount((prevState) => {
      const changedState = {
        ...prevState,
        results: result,
      };
      return changedState;
    });
  }, [count]);

  const onChangeData = useCallback((event) => {
    console.info(event);

    // event.target
    const { target } = event;

    const { name, value } = target;

    setCount((prevState) => {
      console.info(event);
      const changedState = {
        ...prevState,
        [name]: value,
      };

      return changedState;
    });
  }, []);

  const submit = useCallback(() => {
    if (count.user === 'Max') {
      return alert(`${count.user} ${count.say} 'number' ${count.results} `);
    }
    if (count.user === 'Artem') {
      return alert(`${count.user} ${count.say} 'number' ${count.results} `);
    }

    return console.info(`${count.user} ${count.say} 'number' ${count.results}`);
  }, [count]);

  // const onChange = useCallback((event) => {
  //   console.info(event);

  //   setCount((prevState) => {
  //     ...prevState,
  //   },
  // }[])

  return (
    <div>
      <div>
        <input
          name="user"
          type="text"
          placeholder="user"
          onChange={onChangeData}
        />
        <input
          name="say"
          type="text"
          placeholder="say"
          onChange={onChangeData}
        />
        <input
          name="value1"
          type="number"
          placeholder="value1"
          onChange={onChangeData}
        />
        <input
          name="value2"
          type="number"
          placeholder="value2"
          onChange={onChangeData}
        />
        <div>
          <button type="button" onClick={calculate}>
            Calculate
          </button>
          <div>
            <button type="button" onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
