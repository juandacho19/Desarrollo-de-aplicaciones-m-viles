import { View, ScrollView, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { Stack } from 'expo-router';
import { useState } from 'react';
import data from '../data/contenido.json';

export default function PantallaPrincipal() {
  const [value, setValue] = useState('inicio');
  const [items, setItems] = useState(data); // 👈 Guardamos el JSON en estado

  // Función para expandir/colapsar descripción
  const toggleDescripcion = (index) => {
    const nuevosItems = [...items];
    nuevosItems[index].mostrarTodo = !nuevosItems[index].mostrarTodo;
    setItems(nuevosItems);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Conocimientos previos' }} />
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

        {/* Contenido principal con data de elementos.json */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Imagen local */}
          <Image
            source={require('../img/MATE.png')}
            style={{ width: '100%', height: 300, resizeMode: 'contain', marginBottom: 20 }}
          />

          {items.map((item, index) => (
            <Card key={index} style={{ marginVertical: 10, backgroundColor: '#E8F0FE' }}>
              <Card.Content>
                {/* Imagen de cada elemento */}
                <Image
                  source={{ uri: item.urlImagen }}
                  style={{ width: '100%', height: 180, borderRadius: 10, marginBottom: 10 }}
                />

                {/* Título */}
                <Text variant="titleMedium" style={{ color: '#1D4ED8', fontWeight: 'bold' }}>
                  {item.titulo}
                </Text>

                {/* Descripción con ver más / ver menos */}
                <Text variant="bodyMedium" style={{ color: '#1E40AF', marginVertical: 4 }}>
                  {item.mostrarTodo
                    ? item.descripcion
                    : `${item.descripcion.substring(0, 40)}...`}
                </Text>

                {/* Botón de acción */}
                <Button
                  mode="text"
                  textColor="#2563EB"
                  onPress={() => toggleDescripcion(index)}
                >
                  {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
                </Button>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
