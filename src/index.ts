import os from 'os';
import {TyporaPreferences} from "../typora-preferences";
import {MacSoftware} from "@liangshen/mac-software";

export class Typora extends MacSoftware<TyporaPreferences>{
    constructor() {
        super(`${os.homedir()}/Library/Preferences/abnerworks.Typora.plist`);
    }
}
const typora = new Typora();
export default typora;
export {TyporaPreferences};
