import React, {ReactNode} from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {COLORS, icons} from '../../constants';
import FastImage from 'react-native-fast-image';

interface Props {
  children: ReactNode;
  onClose?: any;
}

export default function ModalLayout({onClose, children}: Props) {
  return (
    <View
      style={{flex: 1, backgroundColor: '#00000060', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: COLORS.white,
          margin: 10,
          padding: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#D14B4B30',
              borderRadius: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </View>
  );
}
