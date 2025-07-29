import { View } from 'react-native';
import { Text, TextInput, Button,Divider } from 'react-native-paper';
import { Stack } from 'expo-router';


export default function InicioSesion() {
  return (
    <>
      <Stack.Screen options={{ title: "Iniciar Sesión" }} />
      <View style={{ padding: 25, justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>INICIAR SESIÓN</Text>


        <TextInput label="Correo electrónico" mode ="outlined" left={<TextInput.Icon icon="email" />} 
        style={{ marginBottom: 10, backgroundColor: 'white' }} outlineColor='#a3a3a3ff' activeOutlineColor="#000000ff"
        theme={{ roundness: 10}} /> 

        <TextInput label="Contraseña" mode="outlined" secureTextEntry left={<TextInput.Icon icon="lock" />} style={{ marginBottom: 10, backgroundColor: 'white'    }}
        outlineColor="#949494ff"
        activeOutlineColor="#000000ff"
        theme={{
        roundness: 10, 
        }} />

        <Text style={{ color: '#007bff', textAlign: 'right', marginBottom: 20 }}>¿Olvidaste tu contraseña?</Text>


        <Button mode="contained" style={{ marginBottom: 20, backgroundColor: '#007bff', borderRadius: 8,  }}>INICIAR SESIÓN</Button>


        <Divider style={{ marginBottom: 20 }}  />

        
        <Button
        icon="google"
        mode="outlined"
        style={{ marginBottom: 10 }}
        theme={{ colors: { primary: 'black' } }} 
        textColor="black" 
        >
        Iniciar sesión con Google
        </Button>

        < Button
        icon="apple"
        mode="outlined"
        theme={{ colors: { primary: 'black' } }}
        textColor="black"
        >
           Iniciar sesión con Apple
        </Button>

      </View>
    </>
  );
}
