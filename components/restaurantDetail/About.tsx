import { View, Text, Image } from 'react-native'
import React from 'react'


// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cusine",
//   image: "https://wallpapers.com/images/high/al-fresco-restaurant-in-piazza-dei-signori-8iwhkfq54vjav6kw.webp",
//   price: "$$",
//   reviews: "1500+",
//   rating: 4.5,
//   categories: [{title: "Thai"}, {title: "Comfort Food"}, {title: "Coffee"}, {title: "Ice Cream"}],
// };

// const image = "https://wallpapers.com/images/high/al-fresco-restaurant-in-piazza-dei-signori-8iwhkfq54vjav6kw.webp";
// const name = 'Farmhouse Kitchen Thai Cusine'
// const description = 'Thai . Comfort Food . $$ . 4 stars (2913+)';

export default function About(props: any) {

    // const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;
    const {name, image, price, reviews, rating, categories} = props.route.params;
  
    const formattedCategories = categories.map((cat: { title: any; }) => cat.title).join(" . ");
  
    const description = `${formattedCategories} ${price ? " . " + price : ""} . ticket . ${rating} star (${reviews})`;
  
    return (
      <View>
        <RestaurantImage image={image} />
        <RestaurantName name={name} />
        <RestaurantDescription description={description} />
      </View>
    );
  }
  
  const RestaurantImage = (props: { image: any; }) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );
  
  const RestaurantName = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
    <Text style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
    >
      {props.name}
    </Text>
  );
  
  const RestaurantDescription = (props: { description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
    <Text style={{
      marginTop: 10,
      marginHorizontal: 10,
      fontWeight: "400",
      fontSize: 15.5,
    }}
    >
      {props.description}
    </Text>
  );