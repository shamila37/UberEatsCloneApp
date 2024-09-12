import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Image } from 'react-native-elements';
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux';

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

export default function MenuItem({restaurantName, foods, hideCheckbox, marginLeft}: any) {

    const dispatch = useDispatch();
    
    const selectItem = (item: { title: string; description: string; price: string; image: string; }, checkboxValue: boolean) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: { 
                ...item, 
                restaurantName: restaurantName, 
                checkboxValue: checkboxValue, 
            }
        });

    const cartItems = useSelector(
       (state: any) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food: any, cartItem: any) => 
        Boolean(cartItems.find((item: any) => item.title == food.title));
        
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food: any, index: any) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
                { hideCheckbox ? (
                    <></>
                ) : (
                    <BouncyCheckBox 
                        iconStyle={{ borderRadius: 0 }}
                        fillColor='green'
                        unFillColor='#FFFFFF'
                        innerIconStyle={{ borderRadius: 0, borderColor: "lightgrey" }}
                        isChecked={isFoodInCart(food, cartItems)}
                        onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                    />
                )}
                <FoodInfo food={food}/>
                <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0}/>
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

const FoodImage =({marginLeft, ...props}: any) => (
    <View>
        <Image 
            source={{uri: props.food.image}} 
            style={{
                width: 100, 
                height: 100, 
                borderRadius: 8,
                marginLeft: marginLeft,
            }}/>
    </View>
)