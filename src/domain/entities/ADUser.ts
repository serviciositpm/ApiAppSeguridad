export interface ADUser {
  dn?: string;
  cn?: string;
  sAMAccountName?: string;
  mail?: string;
  displayName?: string;
  [key: string]: unknown;
}
