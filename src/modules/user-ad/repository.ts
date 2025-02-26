import { Client } from "ldapts";
import { configAD } from "../../config/adCOnfig";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";

export class UserADRepository {
  private client: Client;

  constructor() {
    this.client = new Client({
      url: configAD.AD_URL,
    });
  }

  public async findUser(username: string): Promise<any> {
    try {
      console.log("🤔 Connecting to LDAP...");
      await this.client.bind(configAD.AD_USER, configAD.AD_PASSWORD);
      console.log("👍 Connected successfully!");
      const { searchEntries } = await this.client.search(configAD.AD_BASE_DN, {
        filter: `(&(objectClass=user)(sAMAccountName=${username}))`,
        scope: "sub",
        attributes: [
          "dn",
          "sn",
          "cn",
          "givenName",
          "displayName",
          "mail",
          "sAMAccountName",
          "userPrincipalName",
          "title",
          "company",
          "department",
          "telephoneNumber",
          "mobile",
          "streetAddress",
          "postalCode",
          "l",
          "st",
          "co",
          "userAccountControl",
          "accountExpires",
          "lastLogon",
          "pwdLastSet",
          "badPwdCount",
          "lockoutTime",
          "primaryGroupID",
          "description",
        ],
        sizeLimit: 1, // Evita el error de demasiados resultados
      });
      //console.log("Search result:", searchEntries);
      await this.client.unbind();
      if (searchEntries.length > 0) {
        return HttpResponse.response(
          CodesHttpEnum.ok,
          { searchEntries },
          "User exists in Active Directory"
        );
        /* return searchEntries[0]; */
      } else {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          "User not found in Active Directory"
        );
        //throw new Error("User not found in Active Directory");
      }
    } catch (error) {
      console.error("❌ Error querying Active Directory in Repository:", error);
      throw new Error(`❌ Error querying Active Directory in Repository: ${error}`);
    }
  }
}
