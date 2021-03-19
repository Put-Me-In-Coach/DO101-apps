const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< HEAD
    response = 'This is version 3 of the app.' + '\n';
=======
    response = 'This is version 2 of the app.' + '\n';
>>>>>>> 60001e444f12d9a10d1631e65c65eb3818358886

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
