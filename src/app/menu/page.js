// import { useClient } from 'use-client'; 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


import {User} from '@/models/User';
import connectDB,{MenuItem, fetchMenuItems } from '@/components/db';


connectDB()
fetchMenuItems()


function MenuPage() {


  return (
<div>



<div className="bg-gray-200 p-4 rounded-lg text-center
        group hover:bg-white hover:shadow-md
         hover:shadow-black/25 transition-all">
        <div className="text-center">
          <img src="/pizza.png" className="Max-h-auto Max-h-24
          block mx-auto" alt="pizza"/>
        </div>
        <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
            lorem fsdf fgd sdsf sdfs kjkdas dsada dad kjkjkdaldkas
        </p>
        <button className="bg-primary mt-4 text-white 
        rounded-full px-8 py-2">Add to cart $12</button>
        </div>


    </div>
  );
}

export default MenuPage;

