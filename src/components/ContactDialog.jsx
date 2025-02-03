import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

const ContactDialog = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('qr');
  
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Erica McDulling
TITLE:Professional Live-in Carer
TEL:+44 7123 456789
EMAIL:erica@example.com
ADR:;;Glasgow;Scotland;;United Kingdom
END:VCARD`;

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in Touch</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'qr' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('qr')}
          >
            Scan QR Code
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'details' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Contact Details
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'qr' ? (
            <div className={styles.qrSection}>
              <div className={styles.qrWrapper}>
                <QRCodeSVG 
                  value={vCardData}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className={styles.qrText}>
                Scan this QR code to save my contact details directly to your phone
              </p>
            </div>
          ) : (
            <div className={styles.detailsSection}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <div>
                  <h3 className={styles.contactLabel}>Phone</h3>
                  <p className={styles.contactValue}>+44 7123 456789</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <div>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <p className={styles.contactValue}>erica@example.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div>
                  <h3 className={styles.contactLabel}>Location</h3>
                  <p className={styles.contactValue}>Glasgow, Scotland</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
  dialog: "bg-white rounded-xl max-w-md w-full",
  header: "flex items-center justify-between p-4 border-b",
  title: "text-xl font-semibold text-gray-800",
  closeButton: "text-gray-500 hover:text-gray-700 transition-colors",
  tabs: "flex border-b",
  tab: "flex-1 px-4 py-3 text-center text-gray-600 hover:text-gray-800 transition-colors",
  activeTab: "text-orange-600 border-b-2 border-orange-600 font-medium",
  content: "p-6",
  qrSection: "flex flex-col items-center space-y-4",
  qrWrapper: "bg-white p-4 rounded-lg shadow-md",
  qrText: "text-center text-gray-600 max-w-sm",
  detailsSection: "space-y-6",
  contactItem: "flex items-start space-x-4",
  contactIcon: "w-6 h-6 text-orange-600 mt-1",
  contactLabel: "text-sm text-gray-500",
  contactValue: "text-gray-800 font-medium"
};

export default ContactDialog;