export interface IAvatarUserSettings {
  size?: number;
  userId?: number;
  currentUser?: boolean;
  imageUrl?: string;
  text?: string | null | (string | undefined | null)[];
  color?: string;

  onDeleteClick(): void;
  onUploadSuccess(id: number): void;
}
