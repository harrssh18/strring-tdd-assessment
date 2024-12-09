interface Props {
  output: number | undefined
}
const Result = (props: Props) => {
  const { output } = props;
  return <div className="border-t border-gray-600 my-3 w-2/3 mx-auto">
   {output && <p className="text-lg mt-2">Output: <span className="text-lg">{output}</span></p>}
  </div>
};

export default Result;
