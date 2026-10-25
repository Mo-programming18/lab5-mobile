import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  useLocalSearchParams,
  router,
} from 'expo-router';

export default function DetailsScreen() {
  const { name, city, type } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Place Details</Text>

        <Text style={styles.subtitle}>
          Your favourite coffee or food place is:
        </Text>

        <Text style={styles.name}>
          {name}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>City</Text>
        <Text style={styles.value}>
          {city}
        </Text>

        <Text style={styles.label}>Type</Text>
        <Text style={styles.value}>
          {type}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() =>
            router.replace('/(drawer)/(tabs)')
          }
        >
          <Text style={styles.buttonText}>
            Back to My Places
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#197FB0',
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#191919',
    marginBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444444',
    marginTop: 14,
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: '#666666',
  },

  button: {
    backgroundColor: '#197FB0',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 28,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  }
});