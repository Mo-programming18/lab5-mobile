import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const films = [
  {
    id: '1',
    title: 'Interstellar',
    genre: 'Science Fiction',
    reason: 'I like its scientific ideas and emotional story.',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    genre: 'Action / Crime',
    reason: 'I enjoy its characters and interesting story.',
  },
  {
    id: '3',
    title: 'The Pursuit of Happyness',
    genre: 'Drama',
    reason: 'It inspires me to work hard and never give up.',
  },
];

export default function FilmsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Top Films</Text>

      {films.map((film) => (
        <View key={film.id} style={styles.card}>
          <Text style={styles.title}>
            {film.title}
          </Text>

          <Text style={styles.genre}>
            Genre: {film.genre}
          </Text>

          <Text style={styles.reason}>
            {film.reason}
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 2,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#191919',
  },
  genre: {
    fontSize: 15,
    color: '#197FB0',
    marginBottom: 8,
  },
  reason: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
  },
});