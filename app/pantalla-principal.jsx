import { useRouter } from 'expo-router';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

// Array de objetos con la info que quieres mostrar
const secciones = [
  {
    id: 1,
    titulo: '¡Bienvenido!',
    subtitulo: '¡Nos alegra tenerte aquí!',
    imagen: require('../img/BIENVENIDO.png'),
    botonTexto: 'Empezar',
    botonColor: '#3B82F6',
    destino: '/conocimientos-previos',
  }
];

export default function PantallaPrincipal() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      {secciones.map((item) => (
        <View key={item.id}>
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Text variant="headlineLarge" style={{ fontWeight: 'bold', textAlign: 'center' }}>
              {item.titulo}
            </Text>
            <Text variant="bodyMedium" style={{ textAlign: 'center', marginTop: 8 }}>
              {item.subtitulo}
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image
              source={item.imagen}
              style={{ width: 400, height: 400, borderRadius: 10 }}
            />
          </View>

          <Button
            mode="contained"
            onPress={() => router.push(item.destino)}
            buttonColor={item.botonColor}
            contentStyle={{ paddingVertical: 8 }}
            style={{ borderRadius: 8 }}
          >
            {item.botonTexto}
          </Button>
        </View>
      ))}
    </ScrollView>
  );
}
