export interface Alert {
  type: AlertType;
  message: string;
  dismissible?: boolean;
}

export enum AlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'danger',
}
