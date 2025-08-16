import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Stack, useLocalSearchParams } from 'expo-router';
import elementos from '../data/elementos.json';

export default function DetalleElemento() {
  const { id } = useLocalSearchParams(); 
  const elemento = elementos.find(e => e.id === parseInt(id));

  if (!elemento) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No se encontró el elemento</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Detalle de Elemento' }} />

      <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
        <Image
          source={{ uri: elemento.urlImagen }}
          style={{ width: '100%', height: 200, marginBottom: 40, borderRadius: 12 }}
          resizeMode="contain"
        />

        <Text
          variant="titleLarge"
          style={{ fontWeight: 'bold', fontSize: 32, marginBottom: 15 }}
        >
          {elemento.titulo}
        </Text>

        <Text
          variant="titleMedium"
          style={{ fontSize: 24, marginBottom: 12 }}
        >
          {elemento.precio ? `$${elemento.precio}` : 'Sin precio'}
        </Text>

        <Text style={{ marginBottom: 20, textAlign: 'left', fontSize: 18, lineHeight: 24 }}>
          {elemento.descripcion}
        </Text>

        <View style={{ marginTop: 'auto' }}>
          <Button
            mode="contained"
            buttonColor="#007bff"
            style={{ width: '100%', borderRadius: 8, paddingVertical: 6 }}
            labelStyle={{ fontSize: 16 }}
          >
            Acción
          </Button>
        </View>
      </View>
    </>
  );
}
