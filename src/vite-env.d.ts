/* eslint-disable @typescript-eslint/triple-slash-reference  -- Vite documentation */
/// <reference types="vite/client" />

declare const APP_VERSION: string

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv?
}
