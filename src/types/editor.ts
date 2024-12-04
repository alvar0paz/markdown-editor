export interface EditorState {
  markdown: string;
  renderedHtml: string;
  livePreview: boolean;
}

export interface ControlsProps {
  livePreview: boolean;
  onToggleLivePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRender: () => void;
}

export interface EditorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface PreviewProps {
  html: string;
}