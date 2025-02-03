import React from 'react';

const ReferenceDialog = ({ isOpen, onClose, reference }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.content}>
          <p className={styles.text}>{reference.text}</p>
          <div className={styles.author}>
            <strong>{reference.author}</strong>
            <span>{reference.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
  dialog: "bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
  closeButton: "absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700",
  content: "p-8",
  text: "text-gray-700 mb-6 leading-relaxed",
  author: "flex flex-col text-sm"
};

export default ReferenceDialog;