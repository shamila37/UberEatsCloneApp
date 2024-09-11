import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Image } from 'react-native-elements';
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux';

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

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});

export default function MenuItem({restaurantName}) {

    const dispatch = useDispatch();
    
    const selectItem = (item: { title: string; description: string; price: string; image: string; }, checkboxValue: boolean) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...item, 
                restaurantName: restaurantName, 
                checkboxValue: checkboxValue, 
            }
        });

    const cartItems = useSelector(
       (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItem) => 
        Boolean(cartItems.find((item) => item.title == food.title));
        
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
                <BouncyCheckBox iconStyle={{ borderRadius: 0 }}
                            fillColor='green'
                            unFillColor='#FFFFFF'
                            innerIconStyle={{ borderRadius: 0, borderColor: "lightgrey" }}
                            isChecked={isFoodInCart(food, cartItems)}
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            />
                <FoodInfo food={food}/>
                <FoodImage food={food}/>
            </View>
            <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
        </View>
    ))}
    </ScrollView>
  );
}

const FoodInfo = (props: any) => (
    <View style={{width: 240, justifyContent: "space-between", }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage =(props: any) => (
    <View>
        <Image 
            source={{uri: props.food.image}} 
            style={{
                width: 100, 
                height: 100, 
                borderRadius: 8,
            }}/>
    </View>
)