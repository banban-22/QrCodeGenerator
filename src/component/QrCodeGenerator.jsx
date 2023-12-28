import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

const QrCodeGenerator = () => {
  const qrCodeRef = useRef(null);
  const [url, setUrl] = useState('');
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };

  return (
    <div className="qrcode__container">
      <h1>Please add URL Here!</h1>
      <div className="qrcode__container--parent" ref={qrCodeRef}>
        <div className="qrcode__input">
          <input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleQrCodeGenerator}>Generate QR Code</button>
        </div>

        {qrIsVisible && (
          <div>
            <QRCode value={url} size={300} />
          </div>
        )}
      </div>
    </div>
  );
};
export default QrCodeGenerator;
