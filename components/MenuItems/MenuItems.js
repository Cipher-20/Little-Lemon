import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];


const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

export default function MenuItems() {

      const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>

    return (
        <View style={styles.container}>
            <Text style={styles.header}>View Menu</Text>

          <FlatList 
             data={menuItemsToDisplay}
             renderItem={renderItem}>
             keyExtractor={(item) => item.id}
              
          </FlatList>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: 'black'
    },
    header:{
        fontSize: 35,
        color: '#F4CE14',
        textAlign:'center',
        margin: 15
    },


    innerContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
      paddingVertical: 20,
    },

    itemText: {
      color: '#F4CE14',
      fontSize: 20,
    },

    separator:{
      borderBottomWidth: 1,
      borderColor: '#EDEFEE'
    }
    
  });
  