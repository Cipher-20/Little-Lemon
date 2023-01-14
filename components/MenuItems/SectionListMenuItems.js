import * as React from 'react';
import { StyleSheet, Text, View, SectionList, ImageBackground, Image } from 'react-native';
import Footer from '../Footer/Footer';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];


const ItemBackground = ({ name, price }) => (
  <View >

    <ImageBackground
      source={require('../../assets/box-middle.png')}
      style={styles.boxStyle}>
          <View style={styles.innerContainer}>
            <Text style={styles.itemText}>{name}</Text>
            <Text style={styles.itemText}>{price}</Text>
          </View>

    </ImageBackground>
     

  </View>
    );


const Title = ({ title }) => (

    <View style={styles.headerStyle}>
      <Text style={styles.headerSection}>{title}</Text>
    </View>
  );

  const Separator = () => (
    <View style={styles.separator}>
        <Text></Text>
    </View>
  )
  
  const image = require('../../assets/little-lemon-background.png');

export default function SectionListMenuItems() {

      const renderItemBackground = ({ item }) => <ItemBackground name={item.name} price={item.price}/>
      const renderTitle = ({ section: {title} }) => <Title title={title} />
      const renderFooterItem = ({}) => <Footer />
    return (    
        <ImageBackground source={image} style={styles.container}>
            <SectionList
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay}
            renderSectionHeader={renderTitle}
            renderItem={renderItemBackground}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={renderFooterItem}

            ></SectionList>




            {/* <ImageBackground
            style={styles.boxStyle}
            source={require('../../assets/box-middle.png')}
            >
            <ImageBackground /> */}

            {/* <Image
              source={require('../../assets/box-middle.png')}
              style={styles.boxStyle}
            /> */}

           

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: 'black',
      backgroundColor: 'rgb(53, 122, 98)'
    },
    header:{
        fontSize: 35,
        color: '#F4CE14',
        textAlign:'center',
        margin: 15
    },


    innerContainer:{
      // flexDirection: 'row',
      //justifyContent: 'space-between',
      // paddingHorizontal: 40,
      // paddingVertical: 20,
      textAlign: 'right'
    },

    itemText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'right'

    },

    separator:{
      borderBottomWidth: 1,
      borderColor: '#EDEFEE'
    },

    headerStyle:{
        backgroundColor: '#EE9972',
    },
    headerSection:{
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    },

    boxStyle:{
      height:200,
      width:300,
      margin:30,
      resizeMode: 'repeat',
      paddingHorizontal: 30,
      paddingVertical: 70
    }
    
  });
  