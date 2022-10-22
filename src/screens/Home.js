import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import data from '../data';
import { boxStyle, headingStyle } from '../styles/styles';

const Home = () => {
  

const HeaderList = ()=>{
  return(
      <View>
          <Text style={headingStyle.flatListHeading}>List All Hobies</Text>
      </View>
  )
}
  const renderDataItem = ({item})=>{
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    )
  }
  return (
    <View style={boxStyle.container}>
      <FlatList
        data={data}
        renderItem={renderDataItem}
        keyExtractor={item=> item.id.toString()}
        ListHeaderComponent={<HeaderList />}
      />
    </View>
  )
}

export default Home