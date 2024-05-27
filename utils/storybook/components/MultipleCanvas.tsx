import React from 'react';
import { ModuleExport } from '@storybook/types';
import { Canvas, } from '@storybook/blocks';
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
        <div key={index}>
          <h3>{item.title}</h3>

          <Canvas of={item.of} />
        </div>
      ))}
    </div>
  );
};

