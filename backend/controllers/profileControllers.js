// import User from "../models/User.js";

// export const getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res
//       .status(200)
//       .json({ user, status: true, msg: "Profile found successfully.." });
//   } catch (err) {
//     console.error(err);
//     return res
//       .status(500)
//       .json({ status: false, msg: "Internal Server Error" });
//   }
// };

import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    // Replace this with a valid ID from your database
    const demoUserId = "6822f1e35512d76957314549";

    const user = await User.findById(demoUserId).select("-password");

    if (!user) {
      return res.status(404).json({ status: false, msg: "User not found" });
    }

    res
      .status(200)
      .json({ user, status: true, msg: "Profile found successfully.." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, msg: "Internal Server Error" });
  }
};
