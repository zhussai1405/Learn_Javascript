const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * 
*/

const userData = new Promise((resolve, reject) => {
    const error  = false;

    if(error) {
        reject('500 level Error');
    } else {
        resolve({
            firstName : 'Faraz',
            age: 32,
            email:'farazhassan@gmail.com'
        });
    }
});

userData.then((data)=> console.log(data))
.catch((error)=> console.log(error));