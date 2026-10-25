import {
  Platform,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';

const places = [
  {
    id: '1',
    name: 'Al-Aqsa Mosque',
    location: 'Jerusalem, Palestine',
    reason: 'A beautiful historical place with great cultural and spiritual importance.',
  },
  {
    id: '2',
    name: 'Ibrahimi Mosque',
    location: 'Hebron, Palestine',
    reason: 'I like its historical importance and unique architecture.',
  },
  {
    id: '3',
    name: 'Old City of Hebron',
    location: 'Hebron, Palestine',
    reason: 'I enjoy its traditional markets, old streets, and local atmosphere.',
  },
];

export default function PlacesScreen() {
  const [isMounted, setIsMounted] = useState(Platform.OS !== 'web');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <View style={styles.container} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Favorite Places</Text>

      <Text style={styles.subtitle}>
        Places I enjoy visiting
      </Text>

      {places.map((place) => (
        <View key={place.id} style={styles.card}>
          <Text style={styles.name}>{place.name}</Text>

          <Text style={styles.location}>
            📍 {place.location}
          </Text>

          <Text style={styles.reason}>
            {place.reason}
          </Text>
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
    color: '#666666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 2,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#191919',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#197FB0',
    marginBottom: 10,
  },
  reason: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
  },
});