
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://myfood:4GfxcsgYUwXYYJM6@cluster0.ca8osrb.mongodb.net/myfood'; // Replace with your MongoDB connection URI and database name

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  // Add more fields as needed
});

export const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);

//export const MenuItem = mongoose.model('MenuItem', menuItemSchema);
// const menuItemSchema = new mongoose.Schema({
//   // Schema fields...
// }, { collection: 'menuitems' });

export const fetchMenuItems = async () => {
  
  try {
    const menuItems = await MenuItem.find(); 
    
    return menuItems;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export default connectDB;