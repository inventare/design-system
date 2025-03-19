import React, { PropsWithChildren } from 'react';

export const Icon = ({ icon }: { icon: string }) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <i className={icon}></i>
      <span>{icon}</span>
    </div>
  )
}

export const IconGrid = ({ children }: PropsWithChildren) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 20 }}>{children}</div>
  )
}
