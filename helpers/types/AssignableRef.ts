export type AssignableRef<ValueType> =
  | {
  bivarianceHack(instance: ValueType | null): void;
}["bivarianceHack"]
  | MutableRefObject<ValueType | null>;