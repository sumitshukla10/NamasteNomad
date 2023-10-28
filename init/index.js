const mongoose=require("mongoose");
const initDBata=require("./data");
const Listing=require("../models/listing");


main().then(()=>{
    console.log("connected well to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB=async()=>{
   await Listing.deleteMany({});
   initDBata.data=initDBata.data.map((obj)=>({...obj,owner:"6531f1f099648081dfe3abc8"}));
   await Listing.insertMany(initDBata.data);
   console.log("data was initiliased");

}

initDB();