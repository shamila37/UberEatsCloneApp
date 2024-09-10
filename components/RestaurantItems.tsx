import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const localRestaurents = [
    {
        name: "Beachside Bar",
        image_url: "https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://wallpapers.com/images/high/el-farallon-restaurant-in-cabo-san-lucas-mexico-su6h4hr7d6blpemp.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 124,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://wallpapers.com/images/high/pub-wood-aesthetic-photography-5mecgmn8o9yp6xb5.webp",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
    {
        name: "Benihana",
        image_url: "https://wallpapers.com/images/high/restaurant-background-fqxbzampnmnommt0.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 124,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://wallpapers.com/images/high/restaurant-background-66dqs6aozq74vmqn.webp",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItems(props: any) {
    return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {/* {props.restaurantData.map((restaurent, index) => ( */}
        {localRestaurents.map((restaurent, index) => (
            <View 
            // key={index}
            style={{
                marginTop: 10, 
                padding: 15, 
                backgroundColor: "white"
                }}>
              {/* restaurent image */}
              {/* <RestaurantImage image={restaurent.image_url}/> */}
              <RestaurantImage image={restaurent.image_url}/>
              {/* restaurent info */}
              <RestaurantInfo 
                // name={restaurent.name} 
                // rating={restaurent.rating}
                name={restaurent.name} 
                rating={restaurent.rating}
              />
            </View>
        ))} 
    
    </TouchableOpacity>
  );
}

const RestaurantImage = (props: any) => (
    <>
    <Image
        source={{
            uri: props.image
        }}
        style={{width: "100%", height: 180}}
        
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color= "#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props: any) => (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10,}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: "gray"}}>30-45 . min</Text>
        </View>
        <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15}}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)