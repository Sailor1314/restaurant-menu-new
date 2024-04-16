import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {User} from '@/models/User';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers:[
    CredentialsProvider({
        name: 'Credentials',
        id:'credentials',
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const email = credentials?.email;
          const password = credentials?.password;
          
          mongoose.connect (process.env.MONGO_URL || 
          "mongodb+srv://myfood:4GfxcsgYUwXYYJM6@cluster0.ca8osrb.mongodb.net/myfood");
          const user = await User.findOne({email});
          const passwordOk = user && bcrypt.compareSync(password, user.password);
  
          if (passwordOk) {
            return user;
          }
  
          return null
        }
      })
  ],
})





