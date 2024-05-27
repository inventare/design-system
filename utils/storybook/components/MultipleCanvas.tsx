import React from 'react';
import { ModuleExport } from '@storybook/types';
import { Story, Source } from '@storybook/blocks';
import styles from './MultipleCanvas.module.scss';

export interface MultipleCanvasProps {
  components: Array<{
    title: string;
    of: ModuleExport;
  }>;
}

export const MultipleCanvas = ({ components }: MultipleCanvasProps) => {


  return (
    <div className={styles.componentsGrid}>
      {components.map((item, index) => (
        <div className={styles.componentRow} key={index}>
          <div>
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

