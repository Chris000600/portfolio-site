import ReactDOM from 'react-dom';

export default function Modal({ children }: any) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999, // ensures overlay priority
        backgroundColor: 'rgba(75, 85, 99, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container">{children}</div>
    </div>,
    document.body
  );
}
