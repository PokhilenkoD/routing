export const SearchBox = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
