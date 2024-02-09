import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountType {
  code: string;
  iconName: string;
  backgroundColor: string;
  text: string;
}

interface SearchCriteria {
  text: string;
  value: string;
}

interface DocumentType {
  type: string;
  month: number;
}

interface VendorConfig {
  name: string;
  config: { path: string };
  passthrough: string;
  datasource: string;
}

interface ArchivalPeriod {
  isIndividual: boolean;
  allStatementPeriod: number;
  initialStartDuration: number;
  statements: DocumentType[];
}

interface BatchDownloadConfig {
  enableCombineIntoSinglePdf: boolean;
  searchType: string;
  ttl: string;
  initialRefreshInterval: number;
  refreshInterval: number;
  enableCompressToZip: boolean;
}

interface CheckImageVendor {
  name: string;
  config: { path: string };
  passthrough: string;
  datasource: string;
}

interface DeliveryPreference {
  disablePaperlessToPaper: boolean;
  disableElectronicForUnenrollUser: boolean;
  disableDeliveryPreferenceChange: boolean;
  bothPaperAndElectronicForUnenroll: boolean;
  unenrollOnDeliveryPreferenceChange: boolean;
  updateTemplateName: string;
  enableUpdateNotification: boolean;
  disableEditOnSSO: boolean;
  disableEditOnDSO: boolean;
  disablePaperToElectronicForSSO: boolean;
  disablePaperToElectronicForDSO: boolean;
  disableForUnknownSSODSO: boolean;
  hideFollowingType: boolean;
  optOut: { restrictionConfig: string[] };
}

interface NotificationPreference {
  npLinkType: string;
  deleteAllNpForUnEnrollUser: boolean;
  profilePrimaryEmail: boolean;
  editProfilePrimaryEmail: boolean;
  editProfilePhone: boolean;
  smsNotification: boolean;
  emailAndSmsNotification: boolean;
  emailConfirmationWorkFlow: boolean;
  smsConfirmationWorkFlow: boolean;
  attachedStatement: { ignorePassword: boolean };
  emailUpdateTemplateName: string;
  enableEmailUpdateNotification: boolean;
  profileEmailLimit: number;
  profilePhoneLimit: number;
}

interface PopupAlert {
  undeliverableEmailMessage: string;
  unViewedDocument: boolean;
  unViewedNotice: boolean;
}

interface StatementType {
  type: string;
  name: string;
}

interface UserAndAccountCreation {
  netTellerProvider: string;
  primaryUserFlag: string;
  enableCreateUser: boolean;
  linkPrimaryUserFlag: boolean;
  emailPreferenceRequired: boolean;
  enableCreateAccount: boolean;
  enableUserUnenroll: boolean;
  enableUserUnlink: boolean;
  enableUserRemove: boolean;
}

interface DemoInstitution {
  cid?: string;
  name: string;
  version: number;
  account: {
    hideSelector: boolean;
    lookup: boolean;
    types: AccountType[];
    minCharForSearch: number;
    notViewable: boolean;
    searchCriteria: SearchCriteria[];
  };
  archivalPeriod: ArchivalPeriod;
  batchDownload: BatchDownloadConfig;
  checkImage: { viewTab: boolean; vendor: CheckImageVendor[] };
  deliveryPreference: DeliveryPreference;
  documents: {
    includeInserts: boolean;
    showHtmlStatements: boolean;
    showDescription: boolean;
  };
  notificationPreference: NotificationPreference;
  popupAlert: PopupAlert;
  statements: StatementType[];
  userAndAccountCreation: UserAndAccountCreation;
}
export type demoData = DemoInstitution[];
const initialState: DemoInstitution[] = [];

export const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setDemo: (state, action: PayloadAction<DemoInstitution[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});
