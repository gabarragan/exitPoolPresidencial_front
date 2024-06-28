import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Component() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Toast component is not available in React Native by default, you may need to use a third-party library for this functionality */}
      <View>
        <Text style={[styles.toast, styles.toastText]}>Revisa tu información antes de continuar.</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.outlineButton]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Abrir modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Confirmar acción</Text>
              <Text style={styles.modalDescription}>
                ¿Estás seguro que deseas realizar esta acción?
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonTextCancel}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  toast: {
    backgroundColor: '#3E7DA0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  toastText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  outlineButton: {
    borderColor: '#3E7DA0',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#3E7DA0',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E7DA0',
  },
  modalDescription: {
    fontSize: 14,
    color: '#949599',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    borderColor: '#A9AAAE',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonTextCancel: {
    color: '#A9AAAE',
    fontSize: 16,
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#F0E454',
  },
});
