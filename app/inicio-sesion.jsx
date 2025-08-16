import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Divider, Dialog, Portal, Provider } from 'react-native-paper';
import { Stack, router } from 'expo-router';
import usuarios from '../data/usuarios.json';

export default function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [alerta, setAlerta] = useState({ visible: false, titulo: '', mensaje: '' });

  const mostrarAlerta = (titulo, mensaje) => {
    setAlerta({ visible: true, titulo, mensaje });
  };

  const cerrarAlerta = () => {
    setAlerta({ ...alerta, visible: false });
  };

  const iniciarSesion = () => {
    if (!correo.trim() && !clave.trim()) {
      mostrarAlerta('Campos vacíos', 'Por favor ingresa tu correo y contraseña.');
      return;
    }
    if (!correo.trim()) {
      mostrarAlerta('Campo vacío', 'Por favor ingresa tu correo electrónico.');
      return;
    }
    if (!clave.trim()) {
      mostrarAlerta('Campo vacío', 'Por favor ingresa tu contraseña.');
      return;
    }

    const usuario = usuarios.find((u) => u.email.toLowerCase() === correo.toLowerCase());

    if (!usuario) {
      mostrarAlerta('Usuario no encontrado', 'El usuario no está registrado.');
      return;
    }

    if (usuario.clave !== clave) {
      mostrarAlerta('Error', 'Datos de acceso incorrectos.');
      return;
    }

    mostrarAlerta('Éxito', `Bienvenido ${usuario.nombre}`);
    console.log('Sesión iniciada por:', usuario.nombre);

    // Navegar a pantalla principal después de cerrar la alerta
    setTimeout(() => {
      cerrarAlerta();
      router.push('/pantalla-principal');
    }, 1500);
  };

  return (
    <Provider>
      <Stack.Screen options={{ title: "Iniciar Sesión" }} />
      <View style={{ padding: 25, justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>
          INICIAR SESIÓN
        </Text>

        <TextInput
          label="Correo electrónico"
          mode="outlined"
          value={correo}
          onChangeText={setCorreo}
          left={<TextInput.Icon icon="email" />}
          style={{ marginBottom: 10, backgroundColor: 'white' }}
          outlineColor='#a3a3a3ff'
          activeOutlineColor="#000000ff"
          theme={{ roundness: 10 }}
        />

        <TextInput
          label="Contraseña"
          mode="outlined"
          value={clave}
          onChangeText={setClave}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          style={{ marginBottom: 10, backgroundColor: 'white' }}
          outlineColor='#949494ff'
          activeOutlineColor="#000000ff"
          theme={{ roundness: 10 }}
        />

        <Text style={{ color: '#007bff', textAlign: 'right', marginBottom: 20 }}>
          ¿Olvidaste tu contraseña?
        </Text>

        <Button
          mode="contained"
          style={{ marginBottom: 20, backgroundColor: '#007bff', borderRadius: 8 }}
          onPress={iniciarSesion}
        >
          INICIAR SESIÓN
        </Button>

        <Divider style={{ marginBottom: 20 }} />

        <Button
          icon="google"
          mode="outlined"
          style={{ marginBottom: 10 }}
          theme={{ colors: { primary: 'black' } }}
          textColor="black"
        >
          Iniciar sesión con Google
        </Button>

        <Button
          icon="apple"
          mode="outlined"
          theme={{ colors: { primary: 'black' } }}
          textColor="black"
        >
          Iniciar sesión con Apple
        </Button>
      </View>

      {/* Aquí tengo las alertas */}
      <Portal>
        <Dialog visible={alerta.visible} onDismiss={cerrarAlerta}>
          <Dialog.Title>{alerta.titulo}</Dialog.Title>
          <Dialog.Content>
            <Text>{alerta.mensaje}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button 
            style={{ backgroundColor: '#007bff', borderRadius: 8 }}
            textColor='white'
            onPress={cerrarAlerta}>Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
}
