import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log('MongoDB connected...')
    // mongoose.set('strictQuery', false);
    mongoose.set('strict', false);
})
    .catch((err) => console.log(err)
    );

export default connectMongo;
