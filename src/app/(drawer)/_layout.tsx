import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#197FB0',
        drawerInactiveTintColor: '#444444',
        drawerLabelStyle: {
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: '#197FB0',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Explore My Places',
          drawerLabel: 'Explore My Places',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="compass-outline"
              size={size}
              color={typeof color === 'number' ? '#444444' : color ?? '#444444'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="films"
        options={{
          title: 'My Top Films',
          drawerLabel: 'My Top Films',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="film-outline"
              size={size}
              color={typeof color === 'number' ? '#444444' : color ?? '#444444'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="music"
        options={{
          title: 'My Top Music',
          drawerLabel: 'My Top Music',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="musical-notes-outline"
              size={size}
              color={typeof color === 'number' ? '#444444' : color ?? '#444444'}
            />
          ),
        }}
      />
    </Drawer>
  );
}