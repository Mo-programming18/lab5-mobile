import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const songs = [
  {
    id: '1',
    title: 'Believer',
    artist: 'Imagine Dragons',
    reason: 'I like its energy and motivational message.',
  },
  {
    id: '2',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    reason: 'I enjoy its melody and romantic lyrics.',
  },
  {
    id: '3',
    title: 'Viva La Vida',
    artist: 'Coldplay',
    reason: 'I like its unique sound and powerful music.',
  },
];

export default function MusicScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Top Music</Text>

      {songs.map((song) => (
        <View key={song.id} style={styles.card}>
          <Text style={styles.title}>
            {song.title}
          </Text>

          <Text style={styles.artist}>
            Artist: {song.artist}
          </Text>

          <Text style={styles.reason}>
            {song.reason}
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
    color: '#191919',
    marginBottom: 8,
  },
  artist: {
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