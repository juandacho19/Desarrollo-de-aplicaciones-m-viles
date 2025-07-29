import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, List, Avatar } from 'react-native-paper';

export default function ListaServicios() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Lista de servicios</Text>

        <List.Item
          title="Servicio de Notificación Telefónica"
          description="Abrir servicios telefónicos para alertas de dispositivos."
          left={() => <Avatar.Icon icon="phone" style={{ backgroundColor: '#a2f39f' }} />}
          right={() => <List.Icon icon="chevron-right" />}
        />

        <List.Item
          title="Protección inteligente"
          description="Aplicación de alarma para el hogar."
          left={() => <Avatar.Icon icon="shield" style={{ backgroundColor: '#8ac9ff' }} />}
          right={() => <List.Icon icon="chevron-right" />}
        />

        <List.Item
          title="Compras"
          description="Encuentra productos y marcas."
          left={() => <Avatar.Icon icon="cart" style={{ backgroundColor: '#ffca8f' }} />}
          right={() => <List.Icon icon="chevron-right" />}
        />

        <List.Item
          title="Maestro de iluminación"
          description="Soluciones de iluminación personalizadas."
          left={() => <Avatar.Icon icon="lightbulb" style={{ backgroundColor: '#d9aaff' }} />}
          right={() => <List.Icon icon="chevron-right" />}
        />

        <List.Item
          title="Asistente de voz de terceros"
          description="Utiliza altavoces inteligentes."
          left={() => <Avatar.Icon icon="microphone" style={{ backgroundColor: '#c0c0ff' }} />}
          right={() => <List.Icon icon="chevron-right" />}
        />
      </View>
    </ScrollView>
  );
}
