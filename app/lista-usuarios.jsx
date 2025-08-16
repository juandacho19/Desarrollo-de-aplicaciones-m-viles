import { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, Card } from 'react-native-paper';
import { useRouter } from 'expo-router';

// Importamos el JSON de usuarios
import usuarios from '../data/usuarios.json';

export default function ListaUsuarios() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState('');

  // Filtro de usuarios
  const filtrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white' }}>
      <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Lista de Usuarios
      </Text>

      <TextInput
        placeholder="Buscar usuario..."
        value={busqueda}
        onChangeText={setBusqueda}
        mode="outlined"
        left={<TextInput.Icon icon="magnify" />}
        style={{ marginBottom: 20 }}
      />

      {filtrados.map(user => (
        <TouchableOpacity
          key={user.id}
          onPress={() =>
            router.push({
              pathname: '/perfil-usuario',
              params: { ...user } // enviamos todos los datos del usuario
            })
          }
        >
          <Card style={{ marginBottom: 15 }}>
            <Card.Title
              title={user.nombre}
              subtitle={user.email}
              left={(props) => (
                <Text {...props} style={{ fontSize: 30 }}>👤</Text>
              )}
            />
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
