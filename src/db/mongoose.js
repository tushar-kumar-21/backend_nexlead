import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/backend_nexlead");
    console.log('MongoDB connected ✅');
  } catch (err) {
    
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};
