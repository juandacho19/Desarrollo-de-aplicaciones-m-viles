import { View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { router, Stack } from 'expo-router';

export default function App() {
  const menuItems = [
    { title: 'Autor', icon: 'account', color: '#0044ff', ruta: 'autor' },
    { title: 'Inicio de sesión', icon: 'lock', color: '#ed82b2', ruta: 'inicio-sesion' },
    { title: 'Pantalla Principal', icon: 'home', color: '#0195f8', ruta: 'pantalla-principal' },

    { title: 'Lista de Usuarios', icon: 'account-group', color: '#28a745', ruta: 'lista-usuarios' },
    { title: 'Lista de Elementos', icon: 'format-list-bulleted', color: '#ed82b2', ruta: 'lista-elementos' },
    { title: 'Lista de Servicios', icon: 'clipboard-list', color: '#ff9800', ruta: 'lista-servicios' },
    { title: 'Formulario de Registro', icon: 'form-select', color: '#ed82b2', ruta: 'formulario-registro' },
    { title: 'Configuración', icon: 'cog', color: '#a3a3a3', ruta: 'configuracion' },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Pantallas',
          headerShown: true,
          headerStyle: { backgroundColor: '#f9f8ff' },
        }}
      />

      <ScrollView style={{ backgroundColor: '#f9f8ff' }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          {menuItems.map((item, index) => (
            <List.Item
              key={index}
              style={itemStyle}
              title={item.title}
              left={props => <List.Icon {...props} icon={item.icon} color={item.color} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push(item.ruta)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const itemStyle = {
  backgroundColor: 'white',
  borderRadius: 10,
  marginBottom: 10,
};
