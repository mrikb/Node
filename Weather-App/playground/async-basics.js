console.log('Starting app');
setTimeout(()=>{
    console.log('inside callback')
}, 2000);

setTimeout(()=>{
    console.log('inside callback2')
});

console.log('Finishing app');