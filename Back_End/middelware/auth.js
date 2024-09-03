import JWT from "jsonwebtoken"

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if ( !authorization ) throw new Error("Missing authorization token")

    const verifyUser = await JWT.verify(authorization.split(" ")[1], process.env.JWT_SECRET)
    req.user = verifyUser.user
    next()
  } catch (err) {
    return res.status(401).json({
          status: false,
          message: err.message
      });
  }
}

export default auth
