import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { firebase } from '@react-native-firebase/firestore';
import MenuItems from '../components/restaurantDetail/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';
// import firebase from '../firebase';

export default function OrderCompleted() {

  const [lastOrder, setLastOrder] = useState({
    items: [
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
    ]
  })


  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //   .collection("orders")
  //   .orderBy("createdAt", "desc")
  //   .limit(1)
  //   .onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       setLastOrder(doc.data());
  //     });
  //   });
  //     return () => unsubscribe();
  // },
  // []);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>
      <View style={{
        margin: 15,
        alignItems: 'center',
        height: "100%",
      }}>
        <LottieView 
          style={{width: 100,  height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay speed={0.5} loop={false}
        />
        <Text style={{
          fontSize: 20,
          fontWeight: "bold"
        }}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10} restaurantName={restaurantName}/>
          <LottieView
              style={{ width: 350, height: 200, alignSelf: "center"}}
              source={require('../assets/animations/cooking.json')}
              autoPlay
              speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}