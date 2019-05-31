import {
  NetInfo,
} from 'react-native';

export function checkNetworkConnection() {
  NetInfo.isConnected.fetch().then(isConnected => isConnected);
}
