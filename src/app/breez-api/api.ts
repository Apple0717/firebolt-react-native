
import {
  GreenlightCredentials,
  NodeConfig,
  NodeConfigVariant
} from '@breeztech/react-native-breez-sdk';

const developerKey: number[] = []
const developerCert: number[] = []
const greenlightCredentials: GreenlightCredentials = {
  deviceKey: developerKey,
  deviceCert: developerCert
}
// const nodeConfig: NodeConfig = {
//   type: NodeConfigVariant.GREENLIGHT,
//   config: {
//     partnerCredentials: greenlightCredentials
//   }
// }
