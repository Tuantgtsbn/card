const mongoose = require('mongoose');
const bcrupt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    avatar: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        default: '',
        minlength: [6, 'Full name must be at least 6 characters long']
    },
    birthday: {
        type: Date
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });
// Mã hóa mật khẩu trước khi lưu vào database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrupt.hash(this.password, 10);
    next();
})

// So sánh mật khẩu
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrupt.compare(enteredPassword, this.password);
}
const User = mongoose.model('User', userSchema);
module.exports = User;