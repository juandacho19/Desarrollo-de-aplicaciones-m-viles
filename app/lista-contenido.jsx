import { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { Stack } from 'expo-router';
import data from '../data/contenido.json';

export default function ListaContenido() {
  const [items, setItems] = useState(data);

  const toggleDescripcion = (index) => {
    const nuevosItems = [...items];
    nuevosItems[index].mostrarTodo = !nuevosItems[index].mostrarTodo;
    setItems(nuevosItems);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Lista Contenido' }} />
      <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
        {items.map((item, index) => (
          <Card key={index} style={{ marginBottom: 16, backgroundColor: '#E8F0FE' }}>
            <Card.Content>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: item.urlImagen }}
                  style={{ width: 80, height: 80, borderRadius: 8, marginRight: 12 }}
                />
                <View style={{ flex: 1 }}>
                  <Text variant="titleMedium" style={{ color: '#1D4ED8', fontWeight: 'bold' }}>
                    {item.titulo}
                  </Text>
                  <Text variant="bodyMedium" style={{ color: '#1E40AF', marginVertical: 4 }}>
                    {item.mostrarTodo
                      ? item.descripcion
                      : `${item.descripcion.substring(0, 30)}...`}
                  </Text>
                  <Button
                    mode="text"
                    textColor="#2563EB"
                    onPress={() => toggleDescripcion(index)}
                  >
                    {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
                  </Button>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}
