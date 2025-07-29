import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function DetalleElemento() {
  return (
    <>
      <Stack.Screen options={{ title: 'Detalle de Elementos' }} />
      <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
        <Image
          source={require('../img/detalles.png')}
          style={{ width: '100%', height: 200, marginBottom: 40, borderRadius: 12 }}
          resizeMode="cover"
        />

        <Text
          variant="titleLarge"
          style={{ fontWeight: 'bold', fontSize: 36, marginBottom: 15 }}
        >
          Elemento uno
        </Text>

        <Text
          variant="titleMedium"
          style={{ fontSize: 30, marginBottom: 12 }}
        >
          $29,99
        </Text>

        <Text style={{ marginBottom: 20, textAlign: 'left', fontSize:25, lineHeight: 22 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
