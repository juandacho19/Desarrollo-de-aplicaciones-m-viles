import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, List, Avatar } from 'react-native-paper';

export default function ListaServicios() {
  // 🔹 Array con los servicios
  const servicios = [
    {
      id: 1,
      title: "Servicio de Notificación Telefónica",
      description: "Abrir servicios telefónicos para alertas de dispositivos.",
      icon: "phone",
      color: "#a2f39f",
    },
    {
      id: 2,
      title: "Protección inteligente",
      description: "Aplicación de alarma para el hogar.",
      icon: "shield",
      color: "#8ac9ff",
    },
    {
      id: 3,
      title: "Compras",
      description: "Encuentra productos y marcas.",
      icon: "cart",
      color: "#ffca8f",
    },
    {
      id: 4,
      title: "Maestro de iluminación",
      description: "Soluciones de iluminación personalizadas.",
      icon: "lightbulb",
      color: "#d9aaff",
    },
    {
      id: 5,
      title: "Asistente de voz de terceros",
      description: "Utiliza altavoces inteligentes.",
      icon: "microphone",
      color: "#c0c0ff",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Lista de servicios
        </Text>

        {servicios.map((servicio) => (
          <List.Item
            key={servicio.id}
            title={servicio.title}
            description={servicio.description}
            left={() => (
              <Avatar.Icon
                icon={servicio.icon}
                style={{ backgroundColor: servicio.color }}
              />
            )}
            right={() => <List.Icon icon="chevron-right" />}
          />
        ))}
      </View>
    </ScrollView>
  );
}
