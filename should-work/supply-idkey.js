const ottoman = require('ottoman')

// create connection to database/bucket
ottoman.connect({
  connectionString: 'couchbase://localhost',
  bucketName: 'travel',
  username: 'Administrator',
  password: 'password'
});

const Airline = ottoman.model('Airline', {
  airlineId: String,
}, {
  idKey: 'airlineId',
})

new Airline({
  airlineId: 'Emirates202009',
}).save()