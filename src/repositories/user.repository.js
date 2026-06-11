// src/repositories/user.repository.js

let profile = {
    id: 1,
    name: '',
    email: '',
    currency: 'ZAR'
};

const getProfile = () => profile;

const updateProfile = (data) => {
    profile = {
        ...profile,
        ...data
    };

    return profile;
};

module.exports = {
    getProfile,
    updateProfile
};