import { type ControlsProps } from '../../types/editor';
import styles from './Controls.module.css';

const Controls = ({ livePreview, onToggleLivePreview, onRender }: ControlsProps) => (
  <div className={styles.controls}>
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={livePreview}
        onChange={onToggleLivePreview}
      />
      Live Preview
    </label>
    <button
      onClick={onRender}
      disabled={livePreview}
      className={styles.button}
    >
      RENDER
    </button>
  </div>
);

export default Controls