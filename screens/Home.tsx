import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from '@rneui/base/dist/Divider/Divider';
// import RestaurantItems, {localRestaurants,} from '../components/RestaurantItems';

const YELP_API_KEY = "";
export default function Home() {
  // const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  // const getRestaurantFromYelp = () => {

  // }
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
        <View style={{
            backgroundColor: "white",
            padding: 15
        }}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            {/* <RestaurantItems restaurantData={restaurantData}/> */}
            <RestaurantItems/>
        </ScrollView>

        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
  );
}