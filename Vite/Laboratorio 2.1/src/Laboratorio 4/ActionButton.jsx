function ActionButton({ label, message }) {
  return (
    <button
      style={{ width: 320, height: 50 }}
      onClick={() => console.log(message)}
    >
      {label}
    </button>
  );
}
export default ActionButton;
