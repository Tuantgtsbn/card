const mongoose = require('mongoose');
// Thêm plugin slug vào mongoose
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Card name is required'],
        trim: true,
        minlength: [2, 'Card name must be at least 2 characters long']
    },
    type: {
        type: String,
        required: [true, 'Card type is required'],
        trim: true
    },

    // Thêm trường slug tự động được tạo từ name
    slug: {
        type: String,
        slug: "name", // Trường này cho biết slug sẽ được tạo từ trường name
        unique: true, // Đảm bảo slug là duy nhất
        slugPaddingSize: 2, // Thêm số vào cuối nếu slug bị trùng
        lowercase: true // Chuyển đổi thành chữ thường
    },

    author: {
        type: String,
        required: [true, 'Author name is required'],
        trim: true
    },

    imgs: [{
        type: String,
        required: [true, 'At least one image is required']
    }],

    color: [{
        type: String,
        required: [true, 'Color is required'],
        trim: true
    }],

    isFree: {
        type: Boolean,
        default: true
    },

    description: {
        type: String,
        trim: true
    },

    tags: [{
        type: String,
        trim: true
    }],

    views: {
        type: Number,
        default: 0
    },

    likes: {
        type: Number,
        default: 0
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true
});

// Giữ nguyên các index và phương thức như cũ
cardSchema.index({ name: 'text', type: 'text', tags: 'text' });

cardSchema.statics.findByAuthor = function (authorName) {
    return this.find({ author: authorName });
};

cardSchema.methods.updateViews = function () {
    this.views += 1;
    return this.save();
};
cardSchema.methods.updateLikes = function (type) {
    if (type === 'increase') {
        this.likes += 1;
    } else if (type === 'decrease') {
        this.likes -= 1;
    }
    return this.save();
}
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;