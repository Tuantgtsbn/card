const Card = require('../models/cardModel');
const apiControllers = {
    searchCard: async (req, res) => {
        const { type, color, price, sortBy, page = 1, limit = 8 } = req.query;
        const query = {};
        if (type) query.type = type;
        if (color) query.color = { $in: [color] };
        if (price) query.isFree = price === 'free';
        const total = await Card.countDocuments(query);
        const handleMappingSortBy = () => {
            switch (sortBy) {
                case 'newest':
                    return 'createdAt';
                case 'popular':
                    return 'likes';
            }
        }
        let cards = null;
        try {
            if (sortBy) {
                const fieldSort = handleMappingSortBy();
                cards = await Card.find(query).sort({ [fieldSort]: -1 }).skip((page - 1) * limit).limit(Number(limit));

            } else {
                cards = await Card.find(query).skip((page - 1) * limit).limit(Number(limit));
            }
            res.status(200).json({
                cards,
                pagination: {
                    total,
                    limit: Number(limit),
                    page: Number(page),
                    totalPage: Math.ceil(total / limit)
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }

    },
    findRelatedCards: async (req, res) => {
        const { id, limit = 5 } = req.query;
        try {
            const card = await Card.findById(id);
            if (card) {
                const relatedCards = await Card.find({ type: card.type }).limit(Number(limit));
                res.status(200).json({
                    success: true,
                    data: relatedCards
                })
            } else {
                res.status(404).json({ message: 'Card not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },
    getCardById: async (req, res) => {
        try {
            const card = await Card.findById(req.params.id);
            res.status(200).json({
                success: true,
                data: card
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createCard: async (req, res) => {
        const cards = [
            {
                name: 'Bear getwell',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/get-well-bear-23674.jpeg?auto=format,compress&w=699',
                color: ['brown'],
                isFree: true,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'Sunny',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/sunnier-days-6229.jpeg?auto=format,compress&w=699',
                color: ['green', 'yellow'],
                isFree: false,
                description: 'Happy getwell',
                tags: ['getwell', 'young']
            },
            {
                name: 'Forever getwell',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/feel-better-props-13271.jpeg?auto=format,compress&w=699',
                color: ['white'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'old']
            },
            {
                name: 'Sky',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/dog-dreaming-42034.jpeg?auto=format,compress&w=699',
                color: ['white', 'blue'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'Rainy rainbow',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'http://images.greetingsisland.com/images/cards/get-well/previews/rainy-rainbow-23730.jpeg?auto=format,compress&w=699',
                color: ['red', 'pink', 'white'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'So cute getwell',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/cherry-blossoms-42591.jpeg?auto=format,compress&w=699',
                color: ['pink'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'My ballon',
                type: 'getwell',
                author: 'Andrew Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/balloons-1896.jpeg?auto=format,compress&w=699',
                color: ['blue'],
                isFree: true,
                description: 'Happy getwell card for you',
                tags: ['getwell']
            },
            {
                name: 'Look turtle',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/while-you-recover-24484.jpeg?auto=format,compress&w=699',
                color: ['green'],
                isFree: true,
                description: 'Happy getwell card for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'Bear getwell',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/get-well-teddy-bear-4346.jpeg?auto=format,compress&w=699',
                color: ['yellow'],
                isFree: true,
                description: 'Happy getwell card for you',
                tags: ['getwell', 'young']
            },
            {
                name: 'Dog',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/pawsitive-vibes-37462.jpeg?auto=format,compress&w=699',
                color: ['blue'],
                isFree: false,
                description: 'Happy getwell card for you',
                tags: ['getwell', 'old', 'young']
            },
            {
                name: 'Card flower',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/tulips-for-my-love-39333.jpeg?auto=format,compress&w=699',
                color: ['green', 'pink'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young', 'old']
            },
            {
                name: 'Sunny day',
                type: 'getwell',
                author: 'John Doe',
                imgs: 'https://images.greetingsisland.com/images/cards/get-well/previews/sunny-day-13933.jpeg?auto=format,compress&w=699',
                color: ['yellow'],
                isFree: false,
                description: 'Happy getwell for you',
                tags: ['getwell', 'young']
            }


        ];
        for (let card of cards) {
            const formData = new FormData();
            formData.append("file", card.imgs); // URL ảnh
            formData.append("upload_preset", "my_preset"); // Upload Preset nếu có

            fetch("https://api.cloudinary.com/v1_1/dctzo9scu/image/upload", {
                method: "POST",
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    Card.create({
                        ...card,
                        imgs: [data.secure_url]

                    }).then((card) => {
                        console.log("Created card:", card);
                    }).catch(error => console.error("Error creating card:", error));
                })
                .catch(error => console.error("Error uploading:", error));
        }
    },
    updateCard: async (req, res) => {
        return null;
    },
    updateViewsOfCard: async (req, res) => {
        try {
            const card = await Card.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } }, { new: true });
            if (!card) {
                return res.status(404).json({ message: 'Card not found' });
            }
            return res.status(200).json({
                success: true,
                views: card.views
            })
        } catch (error) {
            return res.status(500).json({ message: 'Error updating card' });
        }
    },
    updateLikesOfCard: async (req, res) => {
        try {
            const idCard = req.params.id;
            const card = await Card.findById(idCard);
            console.log("User id", req.userId);
            console.log("Card id", idCard);
            console.log("Card", card);
            if (!card) {
                return res.status(404).json({ message: 'Card not found' });
            }
            const hasLiked = card.likedBy.includes(req.userId);
            console.log("Has liked", hasLiked);
            if (hasLiked) {
                await Card.findByIdAndUpdate(idCard, { $pull: { likedBy: req.userId }, $inc: { likes: -1 } });
            } else {
                await Card.findByIdAndUpdate(idCard, { $push: { likedBy: req.userId }, $inc: { likes: 1 } });
            }
            const updatedCard = await Card.findById(idCard);
            return res.status(200).json({
                success: true,
                likes: updatedCard.likes,
                hasLiked: !hasLiked
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error updating card' });
        }
    }
}
module.exports = apiControllers;