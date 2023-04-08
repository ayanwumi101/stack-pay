import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black, Inter_500Medium } from "@expo-google-fonts/inter";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/homeStack';

export default function App() {
   let [fontsLoaded] = useFonts({
     Inter_900Black,
     Inter_500Medium,
   });

   if (!fontsLoaded) {
     return <></>;
   }
  return (
    <View>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 200,
    position: 'relative'
  },
  subheading: {
    fontSize: 60,
    fontFamily: "Inter_900Black",
    color: "#B7b9b9",
    width: 260,
    letterSpacing: 3,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "rgba(0,0,0,0.15)",
  },
  secondImage: {
    flex: 1,
    resizeMode: 'cover',
    // alignItems: "flex-start",
    justifyContent: "flex-start",
    // width: 300,
    // backgroundColor: "rgba(0,0,0,0.15)",
  },
  btnBg: {
    backgroundColor: '#ededed',
    width: 320,
    paddingVertical: 18,
    textAlign: 'center',
    borderRadius: 8,
    marginTop: 150,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  btnText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    marginRight: 8,
  }
});
