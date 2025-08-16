import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { router } from 'expo-router';

export default function Autor() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={require('../img/Juan.jpg')}
            style={styles.avatar}
          />

          <Text variant="headlineMedium" style={styles.nombre}>
            JUAN RENTERIA
          </Text>
          <Text style={styles.info}>
            Estudiante de Ingeniería de Telecomunicaciones
          </Text>
          <Text style={styles.info}>
            Correo: juan.renteria638@utch.edu.co
          </Text>
          <Text style={styles.info}>Quibdó</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            style={styles.btnVolver}
            onPress={() => router.back()}
          >
            Volver
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#fff',
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  nombre: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  actions: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnVolver: {
    backgroundColor: '#007bff',
  },
});
