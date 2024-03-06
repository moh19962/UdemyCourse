const mongoose = require('mongoose');
/* eslint-disable prettier/prettier */
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
// const DB = process.env.DATABASE.replace('<PASSWORD>');
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection succesfull!');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line prettier/prettier
  console.log(`App running on port ${port}...`);
});
