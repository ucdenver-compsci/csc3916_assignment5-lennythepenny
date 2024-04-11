// var mongoose = require('mongoose');
// mongoose.connect(process.env.DB);

// const MovieSchema = new mongoose.Schema({
//   title: { type: String, required: true, index: true },
//     releaseDate: { type: Number, min: [1900, 'Must be greater than 1899'], max: [2100, 'Must be less than 2100']},
//     genre: {
//       type: String,
//       enum: [
//         'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
//       ],
//     },
//     actors: [{
//       actorName: String, 
//       characterName: String,
//     }],
//     imageUrl: { type: String }, 
//   }, { collection : 'movies' });
  

// //return the model
// const MovieModel = mongoose.model('Movie', MovieSchema);
// module.exports = MovieModel;
const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");
} catch (error) {
    console.log("Could not connect to MongoDB:", error);
}

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    releaseDate: { type: Number, min: [1900, 'Must be greater than 1899'], max: [2100, 'Must be less than 2100']},
    genre: {
        type: String,
        enum: [
            'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
        ],
    },
    actors: [{
        actorName: String, 
        characterName: String,
    }],
    imageUrl: { type: String }, 
}, { collection: 'movies' });

// Return the model
const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = MovieModel;
