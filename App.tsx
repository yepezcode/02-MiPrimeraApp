import React from 'react'
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionesScreen } from './src/components/DimensionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { TareaScreen } from './src/screens/TareaScreen';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
         {/* <HolaMundoScreen />
         <ContadorScreen/> */}
         {/* <BoxObjectModelScreen />   */}
         {/* <DimensionesScreen/> */ }
         {/* <PositionScreen /> */}
         {/* <FlexScreen /> */}
         <TareaScreen />
    </SafeAreaView>    

  )
}

export default App;