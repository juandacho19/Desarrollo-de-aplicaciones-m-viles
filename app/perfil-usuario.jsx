import { View, Image } from 'react-native';
import { Text, Button, List, Surface } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function PerfilUsuario() {
  return (
    <>
      <Stack.Screen options={{ title: 'Perfil de Usuario' }} />
      <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
        <Image
          source={require('../img/Juan.jpg')}
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            marginBottom: 20,
          }}
        />
        <Text variant="titleLarge">John Doe</Text>
        <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
          juan.renteria638@utch.edu.co
        </Text>

        <View style={{ width: '100%' }}>
          {[
            { title: 'Editar perfil', icon: 'account-edit' },
            { title: 'Notificaciones', icon: 'bell' },
            { title: 'Configuración', icon: 'cog' },
            { title: 'Ayuda', icon: 'help-circle' },
          ].map((item, index) => (
            <Surface
              key={index}
              style={{
                marginBottom: 10,
                borderRadius: 10,
                elevation: 2,
                backgroundColor: '#fff',
              }}
            >
              <List.Item
                title={item.title}
                left={(props) => <List.Icon {...props} icon={item.icon} />}
              />
            </Surface>
          ))}
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
