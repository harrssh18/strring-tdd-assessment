import LabeledInputField from "./LabeledInputField";
import Button from "./Button";

interface Props {
  input: string;
  onChange: (v: string) => void;
  onSubmit: () => void;

  onClear: () => void;
}

const InputForm = (props: Props) => {
  const { input, onChange, onSubmit, onClear } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col mt-10 mx-auto w-2/3"
    >
      <LabeledInputField
        label="Numbers"
        name="input"
        placeholder="Type here"
        value={input}
        onChange={onChange}
        autoFocus
      />
      <div className="flex mt-8 w-full justify-between">
        <Button type="submit">Calculate</Button>
        <Button onClick={onClear} className="bg-red-500 hover:bg-red-800">
          Clear
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
