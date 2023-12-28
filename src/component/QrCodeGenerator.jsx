import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';

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

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrCodeRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qr-code.png';
        link.click();
      })
      .catch((err) => {
        console.error('Error generating QR code: ', err);
      });
  };

  return (
    <div className="qrcode__container">
      <h1>Please add URL Here!</h1>
      <div className="qrcode__container--parent">
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
          <div className="qrcode__download">
            <div className="qrcode__image" ref={qrCodeRef}>
              <QRCode value={url} size={300} />
            </div>
            <button onClick={downloadQRCode}>Download QR Code</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default QrCodeGenerator;
