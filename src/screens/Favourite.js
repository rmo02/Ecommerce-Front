import React from 'react'
import { Text, View } from 'react-native'


const Favourite = () => {
  return (
    <View style={{justifyContent:"center", alignContent:'center', flex:1}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={{
        fontWeight: "bold",
        color: "#00a46c",
        paddingLeft: 35,
      }}>
        Não existem items favoritados</Text>
      </View>
    </View>
  )
}

export default Favourite;