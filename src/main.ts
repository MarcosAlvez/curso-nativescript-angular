// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from '@nativescript/angular'
import { registerElement } from '@nativescript/angular'

import { AppModule } from './app/app.module'

registerElement("PullToRefresh", () => require("@nativescript-community/ui-pulltorefresh").PullToRefresh)


platformNativeScriptDynamic().bootstrapModule(AppModule)
