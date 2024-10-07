//Object Literals
function addressMaker(city, state){
    const newAddress = {city, state};

    console.log(newAddress);
}
addressMaker({city:'Austin', state: 'Texas'});

//Object literals (combination with template literals, object literals, destructuring objects )
function addressMaker(address){
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United State'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}
    

addressMaker({city:'Austin', state: 'Texas'});
