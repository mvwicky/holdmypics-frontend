export interface Option {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export type UpdateEvent = CustomEvent<{ value: string }>;

export interface ImageFormProps {
  width: number;
  height: number;
  fg: string;
  bg: string;
  fmt: string;
  text: string;
}
