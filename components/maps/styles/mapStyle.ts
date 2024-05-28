import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export const mapStyle = [
    {
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e6e4e0"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#735139"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#735139"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#dcd9d6"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#cdcad6"
        },
        {
          "weight": 1.5
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "color": "#735139"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dbdce4"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#dbdce4"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "color": "#cdcad6"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "color": "#cdcad6"
        }
      ]
    }
]

export default StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent:"center",
  },
  map: {
      height: "100%",
      width: "100%",
  },
  content: {
      paddingHorizontal: 16,
      paddingVertical: 2,
  },
  title: {
      fontSize: theme.fontSizes.subheading,
      fontFamily: theme.fontFamily.bold,
      marginBottom: 6,
  },
  listContainer: {
      marginTop: 16,
      overflowX: 'scroll'
  },
  sectionTitle: {
      fontSize: theme.fontSizes.medium,
      fontFamily: theme.fontFamily.semibold,
      marginBottom: 8,
  },
  noStores: {
      fontSize: theme.fontSizes.medium,
      fontFamily: theme.fontFamily.regular,
      textAlign: "center",
      marginTop: 16,
      color: "#6E6E6E",
  },
  pill_container: {
      flexDirection: 'row',
      gap: 4,
      marginBottom: 6,
  },
  option: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 50,
      borderWidth: 1.5,
  },
  option_text: {
      fontSize: 11,
      marginLeft: 4,
      fontFamily: theme.fontFamily.regular,
  },
})
