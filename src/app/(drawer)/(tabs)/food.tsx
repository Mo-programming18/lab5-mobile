import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

const foodPlaces = [
  {
    id: '1',
    name: 'Sunrise Cafe',
    city: 'Jerusalem',
    type: 'Coffee & Desserts',
    rating: '5',
  },
  {
    id: '2',
    name: 'The Pizza Place',
    city: 'Hebron',
    type: 'Pizza & Italian Food',
    rating: '4',
  },
  {
    id: '3',
    name: 'Sweet Corner',
    city: 'Ramallah',
    type: 'Cakes & Desserts',
    rating: '5',
  },
];

export default function FoodScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Food & Coffee</Text>

      <Text style={styles.subtitle}>
        My favorite places for food and drinks
      </Text>

      {foodPlaces.map((place) => (
        <View key={place.id} style={styles.card}>
          <Text style={styles.name}>{place.name}</Text>

          <Text style={styles.info}>
            City: {place.city}
          </Text>

          <Text style={styles.info}>
            Type: {place.type}
          </Text>


          <Pressable
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: '/details',
                params: {
                  name: place.name,
                  city: place.city,
                  type: place.type,
                  rating: place.rating,
                },
              })
            }
          >
            <Text style={styles.buttonText}>
              View Details
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#197FB0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191919',
    marginBottom: 12,
  },
  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
  },
  rating: {
    fontSize: 19,
    color: '#E6A817',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#197FB0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});