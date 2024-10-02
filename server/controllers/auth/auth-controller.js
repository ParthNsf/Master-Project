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
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;


  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "ewff44f4fwes",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const logoutUser = async (req, res) => {
  res.clearCoookie('token').json({
    success: true,
    message: "Logged out successfully"
  })
};

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if(!token) return res.status(401).json({
    success: false,
    message: "Unauthorised user!"
  })


  try {
    const decoded = jwt.verify(token, 'ewff44f4fwes')
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
}

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
