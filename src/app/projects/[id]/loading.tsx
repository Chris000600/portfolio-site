export default function Loading() {
  return (
    <div style={containerStyle}>
      <Spinner />
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
};

function Spinner() {
  return <div style={spinnerStyle}>Loading...</div>;
}

const spinnerStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
};
