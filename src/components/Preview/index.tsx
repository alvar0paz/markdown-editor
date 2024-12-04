import { type PreviewProps } from '../../types/editor';
import styles from './Preview.module.css';

const Preview = ({ html }: PreviewProps) => (
  <div className={styles.editorPane}>
    <div 
      className={styles.preview}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
);

export default Preview