import { View, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import elementos from '../data/elementos.json'; // aquí va tu JSON

export default function ListaPantalla() {
  const [busqueda, setBusqueda] = useState('');
  const [filtrados, setFiltrados] = useState(elementos);

  useEffect(() => {
    if (busqueda.trim() === '') {
      setFiltrados(elementos);
    } else {
      setFiltrados(
        elementos.filter(item =>
          item.titulo.toLowerCase().includes(busqueda.toLowerCase())
        )
      );
    }
  }, [busqueda]);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white' }}>
      <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Lista
      </Text>

      {/* Campo de búsqueda */}
      <TextInput
        placeholder="Buscar"
        value={busqueda}
        onChangeText={setBusqueda}
        mode="outlined"
        left={<TextInput.Icon icon="magnify" />}
        style={{ marginBottom: 20 }}
      />

      {/* Lista de elementos */}
      {filtrados.map(item => (
        <Card key={item.id} style={{ marginBottom: 15 }}>
          <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: item.urlImagen }}
              style={{ width: 50, height: 50, borderRadius: 8, marginRight: 15 }}
              
            />
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                {item.titulo}
              </Text>
              <Text variant="bodySmall" style={{ color: '#555' }}>
                {item.descripcion.length > 30 && !item.mostrarTodo
                  ? item.descripcion.substring(0, 30) + '...'
                  : item.descripcion}
              </Text>

              {/* Ver más / Ver menos */}
              <Button
                compact
                onPress={() => {
                  item.mostrarTodo = !item.mostrarTodo;
                  setFiltrados([...filtrados]);
                }}
              >
                {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
              </Button>
            </View>

            {/* Botón de acción */}
            <Button
              mode="contained"
              buttonColor="#3B82F6"
              onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
            >
              Acción
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
