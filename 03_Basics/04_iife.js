// Immediate Invoked Function Expressions (IIFE)


(function one(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();


( () => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} )();


( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )('yash')