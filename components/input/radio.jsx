export default function InputRadio({ name, label, handleChange, isActive }) {
  return (
    <div className="flex text-lg mx-2 gap-1 font-SourceSans">
      <div className="relative h-max w-fit">
        <input
          type="radio"
          name={name}
          id={name}
          value={label}
          onChange={handleChange}
          checked={isActive === label}
          className="peer w-4 h-4 checked:ring-4 relative opacity-0 cursor-pointer"
        />
        <span class="rounded-md  peer-checked:bg-primary bg-black/20 dark:bg-white/20 w-4 h-4 top-0 left-0 translate-y-1/2 -z-10  absolute"></span>
      </div>
      <label
        htmlFor={name}
        className={`px-1  ${
          isActive === label
            ? "opacity-100 font-semibold"
            : "opacity-50 font-medium"
        }`}
      >
        {label ? label : "All"}
      </label>
    </div>
  );
}
