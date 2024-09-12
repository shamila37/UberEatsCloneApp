import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
  },
  {
      title: "Tandoori Chicken",
      description: "Amazing Indian dish with tenderloin chicken off th sizzles",
      price: "$19.20",
      image: "https://wallpapers.com/images/high/fried-tandoori-chicken-yo2c5izxm6uvdfbh.webp",
  },
  {
      title: "Chilaqiles",
      description: "Chilaqiles with cheese and sause. A delicious mexican dish",
      price: "$14.50",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BndHJGXI7BV0JPLl-Rl8mc97aPctrkN8lw&s",
  },
  {
      title: "Lasagna ",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
  },
  {
      title: "Tandoori Chicken ",
      description: "Amazing Indian dish with tenderloin chicken off th sizzles",
      price: "$19.20",
      image: "https://wallpapers.com/images/high/fried-tandoori-chicken-yo2c5izxm6uvdfbh.webp",
  },
  {
      title: "Chilaqiles ",
      description: "Chilaqiles with cheese and sause. A delicious mexican dish",
      price: "$14.50",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BndHJGXI7BV0JPLl-Rl8mc97aPctrkN8lw&s",
  },
  {
      title: "Lasagna  ",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
  },
  {
      title: "Tandoori Chicken  ",
      description: "Amazing Indian dish with tenderloin chicken off th sizzles",
      price: "$19.20",
      image: "https://wallpapers.com/images/high/fried-tandoori-chicken-yo2c5izxm6uvdfbh.webp",
  },
  {
      title: "Chilaqiles  ",
      description: "Chilaqiles with cheese and sause. A delicious mexican dish",
      price: "$14.50",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BndHJGXI7BV0JPLl-Rl8mc97aPctrkN8lw&s",
  },
  {
      title: " Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://wallpapers.com/images/high/cheesy-topped-lasagna-alla-bolognese-94z8gqx4ta38mvge.webp",
  },
  {
      title: " Tandoori Chicken",
      description: "Amazing Indian dish with tenderloin chicken off th sizzles",
      price: "$19.20",
      image: "https://wallpapers.com/images/high/fried-tandoori-chicken-yo2c5izxm6uvdfbh.webp",
  },
  {
      title: " Chilaqiles",
      description: "Chilaqiles with cheese and sause. A delicious mexican dish",
      price: "$14.50",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BndHJGXI7BV0JPLl-Rl8mc97aPctrkN8lw&s",
  },
];

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation}/>
    </View>
  )
}