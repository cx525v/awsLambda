const express = require('express');
const app = express();

app.use(expres.json());
app.user(express.urlencoded({ extended: false}));

app.get('/', (req,res) => {
  res.status(200).send('hello world');
});
app.post('/logthis',(req, res) => {
   res.status(200).send('logthis');
});


// const port = 8000;
//app.listen(port, () => {
//  console.log(`listening on : http://localhost:${port}`);
//});
module.exports = app;
