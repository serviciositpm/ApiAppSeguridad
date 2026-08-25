import { Client } from "ldapts";
import { IUserADRepository } from "../../domain/repositories/IUserADRepository";
import { ADUser } from "../../domain/entities/ADUser";
import { configAD } from "../config/adConfig";

const AD_ATTRIBUTES = [
  "dn", "sn", "cn", "givenName", "displayName", "mail", "sAMAccountName",
  "userPrincipalName", "title", "company", "department", "telephoneNumber",
  "mobile", "streetAddress", "postalCode", "l", "st", "co",
  "userAccountControl", "accountExpires", "lastLogon", "pwdLastSet",
  "badPwdCount", "lockoutTime", "primaryGroupID", "description",
];

export class LdapUserADRepository implements IUserADRepository {
  async findUser(username: string): Promise<ADUser[]> {
    const client = new Client({ url: configAD.AD_URL });
    try {
      await client.bind(configAD.AD_USER, configAD.AD_PASSWORD);
      const { searchEntries } = await client.search(configAD.AD_BASE_DN, {
        filter: `(&(objectClass=user)(sAMAccountName=${username}))`,
        scope: "sub",
        attributes: AD_ATTRIBUTES,
        sizeLimit: 1,
      });
      return searchEntries as unknown as ADUser[];
    } finally {
      // Se libera el bind LDAP incluso si la búsqueda falla.
      await client.unbind().catch(() => undefined);
    }
  }
}
