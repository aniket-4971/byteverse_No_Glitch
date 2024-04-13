// db.js

const mongoose = require('mongoose');

const warrentbuddydatabase =process.env.DBURI

const connectToDBs = async () => {
  try {
    await mongoose.connect(warrentbuddydatabase , {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      
    });
    console.log('Connected to  database');
  } catch (error) {
         console.error('Database connection error:', error);
      
}
}
module.exports = connectToDBs
//     await mongoose.createConnection(policeDBURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true
//     });
//     console.log('Connected to police database');

//     await mongoose.createConnection(userDBURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true
//     });
//     console.log('Connected to user database');
//   } catch (error) {
//     console.error('Database connection error:', error);
//   }
// };


