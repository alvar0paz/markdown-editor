import { useState, useEffect } from 'react';
import  Header  from './components/Header';
import  Controls  from './components/Controls';
import  Editor  from './components/Editor';
import  Preview  from './components/Preview';
import { parseMarkdown } from './utils/markdown';
import { type EditorState } from './types/editor';
import styles from './App.module.css';

export default function App() {
  const [state, setState] = useState<EditorState>({
    markdown: localStorage.getItem('markdown') || '# Test document\n\nLet\'s create a variable `x`, equal to 5.\n\n```\nx = 5\n```',
    renderedHtml: '',
    livePreview: true
  });

  useEffect(() => {
    localStorage.setItem('markdown', state.markdown);
    
    if (state.livePreview) {
      const html = parseMarkdown(state.markdown);
      setState(prev => ({ ...prev, renderedHtml: html }));
    }
  }, [state.markdown, state.livePreview]);

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setState(prev => ({
      ...prev,
      markdown: e.target.value
    }));
  };

  const handleRender = (): void => {
    const html = parseMarkdown(state.markdown);
    setState(prev => ({ ...prev, renderedHtml: html }));
  };

  const handleToggleLivePreview = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(prev => ({
      ...prev,
      livePreview: e.target.checked
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Controls
          livePreview={state.livePreview}
          onToggleLivePreview={handleToggleLivePreview}
          onRender={handleRender}
        />
        <main className={styles.editorGrid}>
          <Editor 
            value={state.markdown} 
            onChange={handleMarkdownChange} 
          />
          <Preview html={state.renderedHtml} />
        </main>
      </div>
    </div>
  );
}