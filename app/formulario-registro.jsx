import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import { Text, TextInput, Button, HelperText, Card } from 'react-native-paper';
import { Stack } from 'expo-router';
import { useState } from 'react';
import usuarios from '../data/usuarios.json'; // tu archivo JSON

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');

  const validarEmail = (correo) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(correo);
  };

  const handleRegistro = () => {
    // Validaciones
    if (!nombre.trim() || !email.trim() || !clave.trim() || !confirmarClave.trim()) {
      Alert.alert('Campos vacíos', 'Por favor completa todos los campos.');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Correo inválido', 'Por favor ingresa un correo válido.');
      return;
    }

    const usuarioExiste = usuarios.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (usuarioExiste) {
      Alert.alert('Advertencia', 'El usuario ya está registrado.');
      return;
    }

    if (clave.length < 6) {
      Alert.alert('Contraseña insegura', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (clave !== confirmarClave) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Registro exitoso
    Alert.alert('Éxito 🎉', 'Usuario registrado correctamente.');
    console.log('Nuevo usuario:', { nombre, email, clave });

    // Aquí podrías guardar el usuario en AsyncStorage, API, etc.
    // Ejemplo: const nuevoUsuario = { id: usuarios.length + 1, nombre, email, clave };
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Registro' }} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Card style={styles.card} >
            <Card.Content>
              <Text variant="headlineLarge" style={styles.titulo}>
                Regristro
              </Text>

              <TextInput
                label="Nombre completo"
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                outlineColor="#ccc"
                activeOutlineColor="#007bff"
              />

              <TextInput
                label="Correo electrónico"
                mode="outlined"
                keyboardType="email-address"
                left={<TextInput.Icon icon="email" />}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                outlineColor="#ccc"
                activeOutlineColor="#007bff"
              />
              <HelperText type="error" visible={!!email && !validarEmail(email)}>
                Correo no válido
              </HelperText>

              <TextInput
                label="Contraseña"
                mode="outlined"
                secureTextEntry
                left={<TextInput.Icon icon="lock" />}
                style={styles.input}
                value={clave}
                onChangeText={setClave}
                outlineColor="#ccc"
                activeOutlineColor="#007bff"
              />

              <TextInput
                label="Confirmar contraseña"
                mode="outlined"
                secureTextEntry
                left={<TextInput.Icon icon="lock-check" />}
                style={styles.input}
                value={confirmarClave}
                onChangeText={setConfirmarClave}
                outlineColor="#ccc"
                activeOutlineColor="#007bff"
              />
              <HelperText type="error" visible={!!confirmarClave && clave !== confirmarClave}>
                Las contraseñas no coinciden
              </HelperText>

              <Button
                mode="contained"
                style={styles.btn}
                labelStyle={{ fontSize: 16 }}
                onPress={handleRegistro}
              >
                Registrarse
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  scroll: { flexGrow: 1, justifyContent: 'center' },
  card: { borderRadius: 16, padding: 10 },
  titulo: { textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  input: { marginBottom: 15, backgroundColor: 'white' },
  btn: { marginTop: 20, borderRadius: 8, backgroundColor: '#007bff', paddingVertical: 5 },
});
