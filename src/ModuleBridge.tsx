import App from './App'; import { createBridgeComponent } from '@module-federation/bridge-react/v19';


// Use createBridgeComponent to wrap App as a remote module and export
export default createBridgeComponent({
  rootComponent: App
});