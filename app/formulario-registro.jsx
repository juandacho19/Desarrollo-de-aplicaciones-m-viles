import { View, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function Registro() {
  return (
    <>
      <Stack.Screen options={{ title: 'Registro' }} />
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text
            variant="headlineLarge"
            style={{
              textAlign: 'left',
              marginBottom: 30,
              fontWeight: 'bold',
              fontSize: 30,
            }}
          >
            Registro
          </Text>

          <Text style={{ marginBottom: 5, fontSize: 16 }}>Nombre</Text>
          <TextInput mode="outlined" style={{ marginBottom: 15, backgroundColor: 'white' }} />

          <Text style={{ marginBottom: 5, fontSize: 16 }}>Correo electrónico</Text>
          <TextInput mode="outlined" keyboardType="email-address" style={{ marginBottom: 15, backgroundColor: 'white' }} />

          <Text style={{ marginBottom: 5, fontSize: 16 }}>Contraseña</Text>
          <TextInput mode="outlined" secureTextEntry style={{ marginBottom: 15, backgroundColor: 'white' }} />

          <Text style={{ marginBottom: 5, fontSize: 16 }}>Confirmar contraseña</Text>
          <TextInput mode="outlined" secureTextEntry style={{ marginBottom: 15, backgroundColor: 'white' }} />

          <View style={{ flex: 1 }} />

          <Button
            mode="contained"
            style={{
              marginTop: 30,
              borderRadius: 6,
              paddingVertical: 8,
              justifyContent: 'center',
              backgroundColor: '#007bff',
            }}
            labelStyle={{ fontSize: 16 }}
          >
            Registrarse
          </Button>
        </ScrollView>
      </View>
    </>
  );
}
