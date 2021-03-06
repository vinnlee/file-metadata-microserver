const express = require("express");
const app = express();
const routes = require("./routes/index");

app.set('port', process.env.PORT || 3300);
app.set('view engine', 'pug');
app.use(express.static('public'));

routes(app);

app.listen(app.get('port'), function() {
    console.log('Server up on port: ' + app.get('port'));
});