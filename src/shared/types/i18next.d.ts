// import the original type declarations
import 'i18next';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    returnNull: false;
  }
}
