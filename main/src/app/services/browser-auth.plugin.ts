import {
  IdentityVault, PluginOptions,
  IonicNativeAuthPlugin
} from '@ionic-enterprise/identity-vault';
import { BrowserAuthService } from 'app/services/browser-auth.service';

export class BrowserAuthPlugin implements IonicNativeAuthPlugin {
  constructor(private browserAuthService: BrowserAuthService) {}

  getVault(config: PluginOptions): IdentityVault {
    config.onReady && config.onReady(this.browserAuthService);
    return this.browserAuthService;
  }
}
