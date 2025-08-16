import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { useState } from 'react';

export default function PantallaAjustes() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [infoAyuda, setInfoAyuda] = useState(null); // estado para mostrar/ocultar info

  const opciones = [
    { id: 1, titulo: 'Cuenta', info: 'Administra tu información personal y credenciales de la cuenta.' },
    { id: 2, titulo: 'Privacidad', info: 'Configura quién puede ver tu información y actividad.' },
    { id: 3, titulo: 'Seguridad', info: 'Revisa opciones de inicio de sesión y autenticación en dos pasos.' },
    { id: 4, titulo: 'Ayuda', info: 'Aquí encontrarás información y preguntas frecuentes sobre el uso de la app.' },
  ];

  const handlePress = (opcion) => {
    if (opcion.titulo === "Ayuda") {
      // Si ya está mostrando la info, la oculta. Si no, la muestra.
      setInfoAyuda(infoAyuda ? null : opcion.info);
    } else {
      console.log(`Presionaste ${opcion.titulo}`);
      setInfoAyuda(null); // si se presiona otra opción, ocultamos ayuda
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white', flexGrow: 1 }}>
      <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 20 }}>
        Ajustes
      </Text>

      {/* Opción Notificaciones */}
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

      {/* Opciones dinámicas */}
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
          onPress={() => handlePress(opcion)}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 16 }}>{opcion.titulo}</Text>
          <Text style={{ fontSize: 18, color: '#9CA3AF' }}>
            {opcion.titulo === "Ayuda" && infoAyuda ? "˅" : ">"}
          </Text>
        </TouchableOpacity>
      ))}

      
      {infoAyuda && (
        <View style={{ marginTop: 20, padding: 15, backgroundColor: '#E0F2FE', borderRadius: 8 }}>
          <Text style={{ fontSize: 14, color: '#0369A1' }}>{infoAyuda}</Text>
        </View>
      )}

      {/* Botón cerrar sesión */}
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
