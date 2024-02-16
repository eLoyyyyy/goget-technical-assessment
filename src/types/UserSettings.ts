import { Pagination } from "./Pagination";

export interface UserSettings extends Pagination {
  preferredTheme: string,
  sendEmail: boolean,
}
