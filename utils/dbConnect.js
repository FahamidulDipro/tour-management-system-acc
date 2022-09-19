

const port = process.env.PORT || 8080;
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
  console.log("Database connection is successfull!")
})