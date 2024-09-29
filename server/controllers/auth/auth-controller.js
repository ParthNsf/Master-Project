const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require("../../models/user");

// const registerUser = async (req, res) => {
//   const { userName, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = new User({
//       userName,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(200).json({
//       success: true,
//       message: "User registered successfully",
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    console.log(req.body);
    
    const checkUser = await User.findOne({ email });
    // if (checkUser)
    //   return res.json({
    //     success: false,
    //     message: "User Already exists with the same email! Please try again",
    //   });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { registerUser };
