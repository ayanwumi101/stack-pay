import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const onboarding = () => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.secondImage}
    >
      <ImageBackground
        source={require("../assets/new_onb.png")}
        style={styles.image}
      >
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View>
            <Text style={styles.subheading}>
              Define yourself in your unique way.
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.btnBg}>
            <Text style={styles.btnText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
}

export default onboarding