import { View, ScrollView } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListaPantalla() {
  const [busqueda, setBusqueda] = useState('');

  const data = [
    { id: 1, titulo: 'Item uno' },
    { id: 2, titulo: 'Item dos' },
    { id: 3, titulo: 'Item tres' },
    { id: 4, titulo: 'Item cuatro' }
  ];

  const filtrar = data.filter(item =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white' }}>
      <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Lista
      </Text>

      <TextInput
        placeholder="Buscar"
        value={busqueda}
        onChangeText={setBusqueda}
        mode="outlined"
        left={<TextInput.Icon icon="magnify" />}
        style={{ marginBottom: 20 }}
      />

      {filtrar.map(item => (
        <Card key={item.id} style={{ marginBottom: 15 }}>
          <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="image-outline"
              size={40}
              color="#3B82F6"
              style={{ marginRight: 15 }}
            />
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                {item.titulo}
              </Text>
              <Text variant="bodySmall" style={{ color: '#555' }}>
                Descripción del elemento. Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <Button mode="contained" buttonColor="#3B82F6">
              Acción
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}