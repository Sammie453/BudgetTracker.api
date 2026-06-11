const respository = require('../repositories/user.repository');

const getProfile = (req, res) => {
    const profile = respository.getProfile();
    res.json(profile);
};

const updateProfile = (req, res) => {
    const updatedProfile = respository.updateProfile(req.body);
    res.json(updatedProfile);
};

module.exports = {
    getProfile,
    updateProfile
};