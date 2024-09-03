import bcryptjs from "bcryptjs"
import JWT from "jsonwebtoken"
import userModel from "../models/user.js"

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body
		if (!email || !password)
			throw new Error("Missing username/password", 404)

		const user = await userModel.findOne({email: email}).select('+password').exec()
		if (!user)
			throw new Error("User not found! Please sign up first or ensure that the correct credentials are entered. ", 404)

		const checkPassword = await bcryptjs.compare(password, user.password)

		if (!checkPassword)
			throw new Error("Invalid password, try again", 404);

    const userData =  {...user._doc, password: undefined}
		const token = JWT.sign({ user: userData }, process.env.JWT_SECRET, { expiresIn: '15d' })

		res.json({ status: true, user: userData, token })

	} catch (err) {
     res.status(404).json({
          status: false,
          message: err.message
      });
	}
}

const newRegister = async (req, res, next) => {
		try {
			const { first_name, last_name, email, password,address,gender,age } = req.body

			if (!first_name || !last_name || !email || !password || !address || !gender || !age)
				throw new Error("Invalid request, Please ensure all details are filled and valid", 404)

			const salt =  await bcryptjs.genSalt(10)
			req.body.password = await bcryptjs.hash(password, salt)

      const user = new userModel({ ...req.body, type: 'user' })
			await user.save()

			res.json({status: true, user: user})

		} catch (err) {
     res.status(404).json({
          status: false,
          message: err.message
      });
		}
}


const getAllUsers = async (req, res) => {
    try {
        if (req.user.type !== 'admin') {
            return res.status(403).json({ message: 'Access forbidden: Admins only' });
        }

        const users = await userModel.find(); 
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        return res.status(500).json({ message: error.message });
    }
};


// Get user profile
 const getUserProfile = async (req, res) => {
	try {
	const user = await userModel.findOne({ email: req.user.email }).select('-password');
 
	  if (!user) return res.status(404).json({ message: 'User not found' });
	  res.status(200).json(user);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  };
  
  // no.of user registrations for dashboard
  const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateUserProfile = async (req, res) => {
	try {
	  const userId = req.user._id; 
	  const { first_name, last_name, email, phone, address, gender, age } = req.body;
  
	  const updatedUser = await userModel.findByIdAndUpdate(userId,
		{first_name,last_name,email,phone,address,gender,age,},
		{ new: true } // Return the updated document
	  );
  
	  if (!updatedUser) {
		return res.status(404).json({ message: 'User not found' });
	  }
  
	  res.status(200).json(updatedUser);
	} catch (error) {
	  console.error('Error updating profile:', error);
	  res.status(500).json({ message: error.message });
	}
  };
  

export default {
	login,
	newRegister,
	getAllUsers,
	getUserProfile,
	getUsers,
	updateUserProfile
}


