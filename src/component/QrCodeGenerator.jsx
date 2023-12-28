import { useState } from 'react';

const QrCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };

  return <div>QrCodeGenerator</div>;
};
export default QrCodeGenerator;
