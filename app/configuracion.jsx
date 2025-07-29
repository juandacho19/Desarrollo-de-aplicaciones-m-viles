import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Switch, List, IconButton } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function PantallaAjustes() {
  const navigation = useNavigation();
  const [notificaciones, setNotificaciones] = useState(true);

  const opciones = [
    { id: 1, titulo: 'Cuenta' },
    { id: 2, titulo: 'Privacidad' },
    { id: 3, titulo: 'Seguridad' },
    { id: 4, titulo: 'Ayuda' },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white', flexGrow: 1 }}>

      <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 20 }}>
        Ajustes
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#F3F4F6',
          borderRadius: 8,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 16 }}>Notificaciones</Text>
        <Switch
          value={notificaciones}
          onValueChange={setNotificaciones}
          color="#3B82F6"
        />
      </TouchableOpacity>

      {opciones.map(opcion => (
        <TouchableOpacity
          key={opcion.id}
          style={{
            backgroundColor: '#F3F4F6',
            borderRadius: 8,
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
          onPress={() => console.log(`Presionaste ${opcion.titulo}`)}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 16 }}>{opcion.titulo}</Text>
          <Text style={{ fontSize: 18, color: '#9CA3AF' }}>{'>'}</Text>
        </TouchableOpacity>
      ))}
      <Text
        style={{
          marginTop: 40,
          color: '#3B82F6',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onPress={() => console.log('Cerrar sesión')}
      >
        Cerrar sesión
      </Text>
    </ScrollView>
  );
}
