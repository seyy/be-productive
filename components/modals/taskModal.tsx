import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CloseIcon } from '../svg/CloseIcon';
import { theme } from '../../constants/theme';

interface TaskModalProps {
    visible: boolean
    onClose: () => void
    task: {
        name: string
        description: string
    }
}

const TaskModal: React.FC<TaskModalProps> = ({ visible, onClose, task }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{task.name}</Text>
          <Text style={styles.modalDescription}>{task.description}</Text>
          <CloseIcon onPress={onClose} style={styles.closeIcon} width={40}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: theme.colors.pink,
    borderRadius: 10,
    padding: 20,
    width: '80%',
    height: '50%',
    alignItems:'center',
  },
  modalText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    right: 32,
  },
});

export default TaskModal;
