import React, { useCallBack } from 'react';

function TestInMarch() {
  const test = useCallBack(() => {
    const testData = {
      firstName: 'Max',
      lastName: 'Logvyniuk',
      // eslint-disable-next-line no-magic-numbers
      number: 100 * Math.floor(Math.random() * (9 - 1)) + 1,
    };

    const userData = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };

    const users = [
      {
        id: 1,
        firstName: 'Jeanette',
        lastName: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
      },
      {
        id: 2,
        firstName: 'Giavani',
        lastName: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
      },
      {
        id: 3,
        firstName: 'Noell',
        lastName: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female',
        ip_address: '180.66.162.255',
      },
      {
        id: 4,
        firstName: 'Willard',
        lastName: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male',
        ip_address: '67.76.188.26',
      },
    ];

    const allUserData = { ...testData, ...userData };

    console.info('allUserData - ', allUserData);

    console.info('allUserData keys - ', Object.keys(allUserData));

    console.info('allUserData values - ', Object.values(allUserData));

    console.info('allUserData entries - ', Object.entries(allUserData));

    const result = users.find((item) => item.firstName === 'Giavani');

    console.info('find -', result);

    const results = users.filter((item) => item.gender === 'Male');

    console.info('filter - ', results);

    const fullname = users.map((item) => {
      const newItem = {
        ...item,
        fullname: `${item.firstName} ${item.lastName}`,
      };

      return newItem;
    });

    console.info('map - ', fullname);

    users.forEach((item) => alert(item.email));

    // eslint-disable-next-line no-prototype-builtins
    console.info(allUserData?.hasOwnProperty('id'));

    const newArray = users.map((item) => {
      const testing = {
        ...item,
        createdAt: new Date(),
        ubdatedAt: Date.now(),
      };

      return testing;
    });

    newArray.forEach((item) => console.info(item.createdAt));

    const firstArray = [];

    firstArray.push(allUserData);

    const secondArray = newArray.map((item) => {
      const secondtest = {
        ...item,
        description: {
          a: {
            b: [{ c: 'defew', d: '21323' }],
          },
        },
      };

      return secondtest;
    });

    console.info('multy data ----', secondArray[1].description.a.b[0]?.d);

    // function sumTo(n) {
    //   if (n === 1) return 1;
    //   return n + sumTo(n - 1);
    // }

    // function sumTo(4) {
    //   if (n === 1) return 1;
    //   return 4 + sumTo(3) {
    //                if (n === 1) return 1;
    //                 return 3 + sumTo(2) {
    //                   if (n === 1) return 1;
    //                   return 2 + sumTo(1) {
    //                                 if (1 === 1) return 1;
    //                               };
    //                 };
    //               };
    // }

    // alert( sumTo(100) );
    return true;
  }, []);

  return (
    <div>
      <button onClick={test}>Submit</button>
    </div>
  );
}

export default TestInMarch;
