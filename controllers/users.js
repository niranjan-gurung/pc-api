const { User } = require('../models/schema');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

// user test insert:
// const user1 = User.create({
//     username: 'nimgrg1',
//     password: 1234567,
// });

module.exports = {
    getAllUsers,
};