import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const MAP_TYPES = {
  STANDARD: "standard",
  SATELLITE: "satellite",
};

const MapScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const [mapStyle, setMapStyle] = useState(MAP_TYPES.STANDARD);
  const [isTabBarVisisble, setIsTabBarVisisble] = useState(true);

  const handleMapStyleChange = () => {
    setMapStyle((prevStyle) =>
      prevStyle === MAP_TYPES.STANDARD
        ? MAP_TYPES.SATELLITE
        : MAP_TYPES.STANDARD
    );
  };

  const handleHideTabBar = () => {
    if (isTabBarVisisble) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
      setIsTabBarVisisble(false);
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
      setIsTabBarVisisble(true);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
      } catch (error) {
        Alert.alert("Error fetching location", error.message);
      }
    };

    getLocation();

    navigation.setOptions({ headerShown: false });
    return () => {
      navigation.setOptions({ headerShown: true });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 50.4501,
          longitude: 30.5234,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsCompass={false}
        mapType={mapStyle}
        onMapReady={() => console.log("Map is ready")}
        onLongPress={(e) => setLocation(e.nativeEvent.coordinate)}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="I'm here"
            description="👋 Hello!"
            draggable
          />
        )}
      </MapView>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={handleMapStyleChange}>
          <Feather name="toggle-right" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handleHideTabBar}>
          <Feather name="arrow-down-circle" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapScreen;
