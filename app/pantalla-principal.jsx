import { useRouter } from 'expo-router';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const router = useRouter();


export default function PantallaPrincipal() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', textAlign: 'center' }}>
          ¡Bienvenido!
        </Text>
        <Text variant="bodyMedium" style={{ textAlign: 'center', marginTop: 8 }}>
          ¡Nos alegra tenerte aquí!
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Image
          source={require('../img/BIENVENIDO.png')}
          style={{ width: 400, height: 400, borderRadius: 10 }}
        />
      </View>

      <Button
      mode="contained"
      onPress={() => router.push('/conocimientos-previos')}
      buttonColor="#3B82F6"
      contentStyle={{ paddingVertical: 8 }}
      style={{ borderRadius: 8 }}
      >
      Empezar
      </Button>

    </ScrollView>
  );
}
