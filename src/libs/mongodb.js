import mongoose from "mongoose";

// const url: string | undefined = process.env.MONGODB_URL;

// export async function connecteDB() {
//   if (url) {
//     await mongoose.connect(url);
//   }
// }

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("Connected from previous");
    return global.mongoose.conn;
  } else {
    const conString = process.env.MONGODB_URL;
    const prommise = mongoose.connect(conString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await prommise,
      prommise,
    };
    console.log("Newly connected");
    return await prommise;
  }
}
