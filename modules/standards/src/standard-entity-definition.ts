import {
  EntityDefinition,
  GeneralRequestData,
  Session
} from "@phenyl/interfaces";

type AuthorizationSetting = {};

export class StandardEntityDefinition implements EntityDefinition {
  authorizationSetting: AuthorizationSetting;

  constructor(authorizationSetting: AuthorizationSetting) {
    this.authorizationSetting = authorizationSetting;
  }

  async authorize(
    reqData: GeneralRequestData,
    session: Session | null | undefined
  ): Promise<boolean> {
    // TODO
    return false;
  }

  async validate(
    reqData: GeneralRequestData,
    session: Session | null | undefined
  ): Promise<void> {
    // eslint-disable-line no-unused-vars
  }
}