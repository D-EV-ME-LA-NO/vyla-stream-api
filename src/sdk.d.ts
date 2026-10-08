export type SDKOptions = {
  baseUrl?: string;
  apiKey?: string;
};

export interface VylaSDK {
  readonly name: string;
  readonly version: string;
}
