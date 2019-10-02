import { palette } from "../components/theme";

export const languageOpt = [
  { value: "th", title: "ไทย" },
  { value: "en", title: "Eng" }
];

export const pageOptions = [
  { value: 20, title: "20" },
  { value: 50, title: "50" },
  { value: 100, title: "100" }
];

export const requiredColumns = [
  "name",
  "phone",
  "subdistrict",
  "district",
  "province",
  "postcode",
  "parcelSize",
  "type"
];
export const allColumns = [...requiredColumns, "note", "address", "shopCode"];

export const defaultSelectOpt = {
  name: false,
  phone: false,
  subdistrict: false,
  district: false,
  province: false,
  postcode: false,
  parcelSize: false,
  type: false,
  note: false,
  address: false,
  shopCode: false
};

export const fileStatusColor = {
  ยังไม่ยืนยัน: palette.error,
  รอการอนุมัติ: palette.activelyStatus,
  ยืนยันแล้ว: palette.success,
  ไม่อนุมัติ: palette.error
};

export const userScopes = [
  "4PL_USER_ACCESS",
  "EXTERNAL_OMS_BOOKING_ACCESS",
  "EXTERNAL_OMS_BOOKMARK_ACCESS",
  "EXTERNAL_OMS_ORDER_ACCESS"
];
export const adminScopes = [
  ...userScopes,
  "AUTH_ADMIN_ACCESS",
  "EXTERNAL_OMS_COMPANY_ACCESS",
  "EXTERNAL_OMS_GROUP_ACCESS"
];

export const fileTemplateURL =
  "https://api.sendit.asia/file-service/v1/static/staging.tds-oms.imported-file/lSQ6qytfe.xlsx";
