import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const localRestaurants = [
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

export default function RestaurantItems({navigation, ...props}: any) {
    return (
        <>
        {localRestaurants.map((restaurant, index) => (
            <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom: 30}} onPress={
                () => navigation.navigate("RestaurantDetail", {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.reviews,
                    rating: restaurant.rating,
                    categories: restaurant.categories,
                })
            }>
                <View 
                    key={index}
                    style={{
                        marginTop: 10, 
                        padding: 15, 
                        backgroundColor: "white"
                        }}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo 
                        name={restaurant.name} 
                        rating={restaurant.rating}
                    />
                </View>
            </TouchableOpacity>
        ))} 
    
    </>
  );
}

const RestaurantImage = (props: { image: any; }) => (
    <>
    <Image
        source={{
            uri: props.image,
        }}
        style={{width: "100%", height: 180}}
        
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color= "#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; rating: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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