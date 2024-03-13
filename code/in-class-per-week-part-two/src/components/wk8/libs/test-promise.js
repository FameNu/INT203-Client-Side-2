async function doSomething(done, timing) {
  return new Promise((resolve, reject) => {
    console.log('wait.......');
    setTimeout(() => {
      done ? resolve('success') : reject('failure');
    }, timing);
  });
}

async function thenDoSomething(done, timing) {
    doSomething(done, timing)
        .then(res => console.log(res + ', your activity is success!'))
        .catch(err => console.log(`${err}, your activity is failed!`));
}

async function waitingSomething(result, timing) {
    try {
        const res = await doSomething(result, timing);
        console.log(res + ', your activity is success!')
    }
    catch (err) {
        console.log(`${err}, your activity is failed!`)
    }
}
console.log('Start doing something... (thenDoSomething)');
thenDoSomething(true, 1000);
thenDoSomething(false, 2000);
setTimeout(() => {
    console.log('Start waiting something... (waitingSomething)');
    waitingSomething(true, 1000);
    waitingSomething(false, 2000);
}, 2500);