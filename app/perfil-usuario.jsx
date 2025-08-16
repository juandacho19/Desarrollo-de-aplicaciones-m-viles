import { View } from 'react-native';
import { Text, Button, List, Surface } from 'react-native-paper';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function PerfilUsuario() {
  const { nombre, email, telefono, direccion, rol } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Perfil de Usuario' }} />
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 60 }}>👤</Text>
          <Text variant="titleLarge">{nombre}</Text>
          <Text variant="bodyMedium">{email}</Text>
        </View>

        <View style={{ width: '100%' }}>
          <Surface style={{ marginBottom: 10, borderRadius: 10, elevation: 2 }}>
            <List.Item title={`📱 Teléfono: ${telefono}`} />
          </Surface>
          <Surface style={{ marginBottom: 10, borderRadius: 10, elevation: 2 }}>
            <List.Item title={`🏠 Dirección: ${direccion}`} />
          </Surface>
          <Surface style={{ marginBottom: 10, borderRadius: 10, elevation: 2 }}>
            <List.Item title={`👔 Rol: ${rol}`} />
          </Surface>
        </View>

        <Button
          onPress={() => {}}
          textColor="blue"
          style={{ marginTop: 30 }}
        >
          Cerrar sesión
        </Button>
      </View>
    </>
  );
}
