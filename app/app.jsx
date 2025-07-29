import { View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { router, Stack } from 'expo-router';

export default function App() {
  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f9f8ff',
        },
      }} />

      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

          <List.Item
            style={itemStyle}
            title="Inicio de sesión"
            left={props => <List.Icon {...props} icon="lock" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("inicio-sesion")}
          />

          <List.Item
            style={itemStyle}
            title="Pantalla Principal"
            left={props => <List.Icon {...props} icon="home" color='#0195f8ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("pantalla-principal")}
          />

          <List.Item
            style={itemStyle}
            title="Lista de Elementos"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-elementos")}
          />


          <List.Item
            style={itemStyle}
            title="Detalle de Elementos"
            left={props => <List.Icon {...props} icon="account" color='#0044ffff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("detalle-elemento")}
          />

          <List.Item
            style={itemStyle}
            title="Formulario de Registro"
            left={props => <List.Icon {...props} icon="cog" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("formulario-registro")}
          />

          <List.Item
            style={itemStyle}
            title="Configuración"
            left={props => <List.Icon {...props} icon="account" color='#a3a3a3ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("configuracion")}
          />

          <List.Item
            style={itemStyle}
            title="Perfil de Usuario"
            left={props => <List.Icon {...props} icon="account" color='#818181ff' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("perfil-usuario")}
          />

          <List.Item
            style={itemStyle}
            title="Lista de Servicios"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#ed82b2' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-servicios")}
          />


        </View>
      </ScrollView>
    </>
  );
}

const itemStyle = {
  backgroundColor: "white",
  borderRadius: 10,
  marginBottom: 10
};
