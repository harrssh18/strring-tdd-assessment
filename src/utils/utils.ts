export function add(numbers: string): number {
  if (!numbers) return 0;
  numbers = numbers.trim(); 
  let cleanedInput = numbers.replace("\\n", "\n");
 
  let delimiter = /,|\n/; 
  if (cleanedInput.startsWith("//")) {
    const parts = cleanedInput?.split("\n");
   
    delimiter = new RegExp(parts[0].slice(2)); 
    cleanedInput = parts[1]; 
  }

  const numberArray = cleanedInput.split(delimiter).map((num) => num.trim());

  const negatives = numberArray.filter((num) => Number(num) < 0);
  if (negatives.length > 0) {
    throw new Error (`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numberArray.reduce((sum, num) => sum + (Number(num) || 0), 0);
}