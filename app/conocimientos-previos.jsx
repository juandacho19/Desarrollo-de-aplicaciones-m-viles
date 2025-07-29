import { View, ScrollView, Image } from 'react-native';
import { Text, Button, SegmentedButtons, Card } from 'react-native-paper';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function PantallaPrincipal() {
  const [value, setValue] = useState('inicio');

  return (
    <>
     
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
        {/* Botones tipo texto estilizados como navegación */}
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Button
            mode={value === 'inicio' ? 'contained-tonal' : 'text'}
            onPress={() => setValue('inicio')}
            textColor={value === 'inicio' ? 'white' : '#3B82F6'}
            buttonColor={value === 'inicio' ? '#3B82F6' : 'transparent'}
            style={{
              marginRight: 10,
              borderRadius: 20,
              elevation: value === 'inicio' ? 2 : 0,
              transform: [{ scale: value === 'inicio' ? 1.05 : 1 }],
            }}
            labelStyle={{ fontSize: 14 }}
          >
            Inicio
          </Button>
          <Button
            mode={value === 'buscar' ? 'contained-tonal' : 'text'}
            onPress={() => setValue('buscar')}
            textColor={value === 'buscar' ? 'white' : '#3B82F6'}
            buttonColor={value === 'buscar' ? '#3B82F6' : 'transparent'}
            style={{
              borderRadius: 20,
              elevation: value === 'buscar' ? 2 : 0,
              transform: [{ scale: value === 'buscar' ? 1.05 : 1 }],
            }}
            labelStyle={{ fontSize: 14 }}
          >
            Buscar
          </Button>
        </View>
        {/* Imagen local debajo del título */}
        <Image
          source={require('../img/MATE.png')} // <-- Cambia esto por tu imagen local
          style={{ width: '100%', height: 300, resizeMode: 'contain', marginBottom: 20 }}
        />


        {/* Contenido principal */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 2].map(i => (
            <Card key={i} style={{ marginVertical: 10, backgroundColor: '#E8F0FE' }}>
              <Card.Content>
                <Text variant="titleMedium" style={{ color: '#1D4ED8' }}>Título {i}</Text>
                <Text variant="bodyMedium" style={{ color: '#1E40AF' }}>
                  Este es el contenido de la tarjeta {i}.
                </Text>
                <Button mode="text" textColor="#2563EB">Ver más</Button>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
