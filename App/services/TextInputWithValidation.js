/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { FormInput, FormValidationMessage } from 'react-native-elements';
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Fonts } from '../../Constants';

export default ({
  input,
  containerStyle,
  iconName,
  showEye,
  eyeHide,
  onEyePress,
  meta: { touched, error },
  ...custom
}) => (
    <View style={[ containerStyle, { marginTop: 20 } ]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <FormInput
          containerStyle={{
            backgroundColor: Colors.white_FFFFFF,
            borderRadius: 4,
            width: 300,
          }}
          placeholderTextColor={Colors.grey_707070}
          {...input}
          {...custom}
        />

        <View
          style={{
            position: 'absolute',
            left: 20,
            height: 50,
            width: 50,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            paddingBottom: 8,
            paddingTop: 12,
          }}
        >
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={Colors.grey_707070}
          />
        </View>

        {showEye
          ? <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              height: 50,
              width: 50,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              paddingBottom: 8,
              paddingTop: 12,
            }}
            onPress={onEyePress}
          >
            {!eyeHide
              ? <MaterialCommunityIcons
                name="eye-off"
                size={25}
                color={Colors.grey_707070}
              />
              : <MaterialCommunityIcons
                name="eye"
                size={25}
                color={Colors.grey_707070}
              />}
          </TouchableOpacity>
          : null}

      </View>

      {error &&
        touched &&
        <FormValidationMessage
          labelStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: Colors.white_FFFFFF,
          }}
          fontFamily={Fonts.myriadProRegular}
        >
          {error}
        </FormValidationMessage>}
    </View>
  );
