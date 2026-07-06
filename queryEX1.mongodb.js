use("sample_mflix");

//fetch all document
//db.comments.find();

//fetch only one user from objectID
//db.comments.find({ _id: ObjectId("5a9427648b0beebeb69579f5")});

//fetch only one user from email
//db.comments.findOne({ email: "john_bishop@fakegmail.com"});

//fetch only one user from name
db.comments.findOne({ name: "John Bishop" });
