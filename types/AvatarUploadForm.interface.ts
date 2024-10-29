export interface IAvatarUploadForm {
  open: boolean;
  imageUrl?: string;
  text?: string | null | (string | undefined | null)[];
  color?: string;

  onUpload(fileId: number, fileUrl?: string): void;
  onClose(): void;
}

export interface IAvatarUploadFormView {
  open: boolean;
  uploadInputRef: any;
  selectedFile: any;
  imageUrl?: string;
  text?: string | null | (string | undefined | null)[];
  color?: string;

  setSelectedFile(data: any): void;
  onInputChanged(event: any): void;
  onChangeClick(): void;
  onUpload(): void;
  onClose(): void;
}
