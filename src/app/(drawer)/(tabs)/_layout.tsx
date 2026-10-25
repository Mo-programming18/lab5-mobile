import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, type ComponentProps } from 'react';
import { View } from 'react-native';

type TabIconName = ComponentProps<typeof Ionicons>['name'];
type TabIconColor = ComponentProps<typeof Ionicons>['color'];

function HydrationSafeTabIcon({
  name,
  color,
  size,
}: {
  name: TabIconName;
  color: TabIconColor;
  size: number;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <View style={{ width: size, height: size }} />;
  }

  return <Ionicons name={name} size={size} color={color} />;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#197FB0',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Places',
          tabBarLabel: 'My Places',
          tabBarIcon: ({ color, size }) => (
            <HydrationSafeTabIcon
              name="location-outline"
              size={size}
              color={typeof color === 'number' ? '#777777' : color ?? '#777777'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="food"
        options={{
          title: 'My Food & Coffee',
          tabBarLabel: 'Food & Coffee',
          tabBarIcon: ({ color, size }) => (
            <HydrationSafeTabIcon
              name="cafe-outline"
              size={size}
              color={typeof color === 'number' ? '#777777' : color ?? '#777777'}
            />
          ),
        }}
      />
    </Tabs>
  );
}