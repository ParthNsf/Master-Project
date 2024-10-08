  const express = require("express");
  const mongoose = require("mongoose");
  const cookieParser = require('cookie-parser');
  const cors = require('cors');

  mongoose.connect('mongodb+srv://parthsaliya63:4qhTYPbzgEXicdZo@cluster1.n6tlc.mongodb.net/')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(
    cors({
      origin: "http://localhost:5173/",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credential: true,  
    })
  );

  app.use(cookieParser());  
  app.use(express.json());

  app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
