import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const TareaScreen = () => {
   return (
       <View style={ styles.container }>
           <View style={ styles.cajaMorada} />
           <View style={ styles.cajaNaranja} />
           <View style={ styles.cajaAzul} />
       </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor : '#5856D6',
        
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        top: 50,
        backgroundColor : '#F0A23B',
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor : '#28C4D9',
        

    }

});