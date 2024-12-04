import { type EditorProps } from '../../types/editor';
import styles from './Editor.module.css';

const Editor = ({ value, onChange }: EditorProps) => (
  <div className={styles.editorPane}>
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textarea}
      placeholder="Enter your markdown here..."
      aria-label="Markdown input"
    />
  </div>
);

export default Editor