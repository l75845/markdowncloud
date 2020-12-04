import React from 'react';
import Routes from 'web/routes/index-server';
import './index.module.css';
import '@assets/styles/global.css';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import contentState from '@recoil/atoms/contentState';
import 'antd/dist/antd.css';

export const getInitialData = () => {
  const initalData = window.__INITIAL__DATA__ || {};
  window.__INITIAL__DATA__ = undefined;
  return initalData;
};
function initializeState({ set }: MutableSnapshot): void {
  set(contentState, getInitialData);
}

const App = () => (
  <RecoilRoot initializeState={initializeState}>
    {Routes()}
  </RecoilRoot>
);

export default App;
