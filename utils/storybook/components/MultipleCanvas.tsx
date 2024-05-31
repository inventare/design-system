import React from 'react';
import { ModuleExport } from '@storybook/types';
import { Story, Source } from '@storybook/blocks';
import styles from './MultipleCanvas.module.scss';

export interface MultipleCanvasProps {
  components: Array<{
    title: string;
    of: ModuleExport;
  }>;
  renderWidth?: number | string;
}

export const MultipleCanvas = ({ components, renderWidth = '150px' }: MultipleCanvasProps) => {


  return (
    <div className={styles.componentsGrid}>
      {components.map((item, index) => (
        <div className={styles.componentRow} key={index}>
          <div className={styles.title}>
            <span>{item.title}</span>
          </div>
          <div className={styles.previewCol} style={{ width: renderWidth }}>
            <Story of={item.of} />
          </div>
          <div className={styles.source}>
            <Source of={item.of} dark />
          </div>
        </div>
      ))}
    </div>
  );
};

