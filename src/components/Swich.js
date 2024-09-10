const Switch = ({ checked, onChange, label }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="slider"></span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};

export default Switch;