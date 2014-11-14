/**
 * Created by a_wags25 on 11/13/14.
 */

/*
 getGeo

 address: string of address
 cb: callback that returns result
 param1 = err
 result = { lat: number, lng: number }

 usage:

 getGeo('1600 Amphitheatre Parkway, Mountain View, CA 94043, USA', function(err, location){
 if(err) console.log('something bad happened', err);
 else {
 console.log(location);
 }
 })

 */

function getGeo(address, cb) {
    var api = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var key = 'AIzaSyBr0dQddZcPFvrPJwZfc-JEFlQzbbkr5sw';

    var url = api + address.replace(/\s/g, '+') + '&key=' + key;

    $.get(url, function(data){
        if(data.status && data.status === 'OK'){
            cb(null, data.results[0].geometry.location);
        } else {
            cb(data);
        }
    })
}


