import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // https://expo.github.io/vector-icons/

const WeightRow = ({value, date, onEdit, onRemove}) => (
  <View style={styles.weightRow}>
    <Text style={styles.weightValue}>{value}</Text>
    <Text style={styles.weightDate}>{date}</Text>

    <TouchableOpacity onPress={onEdit} style={styles.iconWrapper}>
      <Ionicons name="md-create" size={16} color="gray" />
    </TouchableOpacity>
    <TouchableOpacity onPress={onRemove} style={[styles.iconWrapper, styles.closeIcon]}>
      <Ionicons name="md-close" size={16} color="gray" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  weightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  weightValue: {
    fontWeight: 'bold',
  },
  weightDate: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  iconWrapper: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    marginLeft: 15,
  }
});

export default WeightRow;
