export interface IAvatarCompanySettings {
  size?: number;
  companyId?: number;
  imageUrl?: string;
  letter?: string;
  color?: string;

  onDeleteClick(): void;
  onUploadSuccess(id: number): void;
}
