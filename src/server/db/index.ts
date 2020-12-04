import mongoose from 'mongoose';

const DB_ADDRESS = 'mongodb://127.0.0.1:27017/markdowns';

mongoose.connect(
  DB_ADDRESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err);
  },
);

export default mongoose;
