import React, { useEffect } from 'react';
import contentState from '@recoil/atoms/contentState';
import { useRecoilState } from 'recoil';
import contentApi from 'web/services/contentApi';
import './index.css';
import saveMarkdown from 'web/services/saveMarkdown';

const Content = () => {
  const [getContentState, setContentState] = useRecoilState(contentState);
  useEffect(() => {
    if (!getContentState || JSON.stringify(getContentState) === '{}') {
      contentApi()
        .then((res: { data: {} }) => {
          setContentState(res.data);
        })
        .catch((e) => console.log(e));
    }
    saveMarkdown()
      .then((res: { data: {} }) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <article
      className="markdown-body"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: getContentState?.content as string }}
    />
  );
};

export default Content;
