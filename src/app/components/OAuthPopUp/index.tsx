import React, { useEffect, ReactChild } from 'react';

interface Props {
  width?: number;
  height?: number;
  url: string;
  title: string;
  onClose: any;
  onCode: any;
  children?: ReactChild;
}

export default function OauthPopup({
  width = 500,
  height = 500,
  url = '',
  title = '',
  children,
  onClose,
  onCode,
}: Props) {
  let externalWindow: any;

  useEffect(() => {
    return () => {
      if (externalWindow) {
        externalWindow.close();
      }
    };
  }, [externalWindow]);

  const createPopup = () => {
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    const windowFeatures = `toolbar=0,scrollbars=1,status=1,resizable=0,location=1,menuBar=0,width=${width},height=${height},top=${top},left=${left}`;

    externalWindow = window.open(url, title, windowFeatures);

    const storageListener = () => {
      try {
        const params = new URL(externalWindow.location).searchParams;
        const code = params.get('code');
        if (code) {
          localStorage.setItem('code', code);
          onCode();
          externalWindow.close();
          window.removeEventListener('storage', storageListener);
        }
      } catch (e) {
        window.removeEventListener('storage', storageListener);
      }
    };

    window.addEventListener('storage', storageListener);

    externalWindow.addEventListener(
      'beforeunload',
      () => {
        onClose();
      },
      false,
    );
  };

  return <div onClick={createPopup}>{children}</div>;
}
