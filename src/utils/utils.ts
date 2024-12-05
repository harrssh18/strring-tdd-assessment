export const add = (numbers:string): number =>{
    if (!numbers) return 0; 
  
    let delimiterRegex = /,|\n/; 
    let numberString = numbers;
  
    
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(\[.*?\]|.)\n/);
      if (match) {
        const delimiterSection = match[1];
        numberString = numbers.slice(match[0].length);
  
    
        if (delimiterSection.startsWith("[")) {
          const delimiters = delimiterSection
            .slice(1, -1)
            .split("][");
          delimiterRegex = new RegExp(delimiters.map(escapeRegex).join("|"), "g");
        } else {
          delimiterRegex = new RegExp(escapeRegex(delimiterSection), "g");
        }
      }
    }
  
    const splitNumbers = numberString.split(delimiterRegex);
  
    const parsedNumbers = splitNumbers.map((num) => parseInt(num, 10) || 0);
    const negatives = parsedNumbers.filter((num) => num < 0);
  
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    const filteredNumbers = parsedNumbers.filter((num) => num <= 1000);
  
    return filteredNumbers.reduce((sum, num) => sum + num, 0);
  }
  
const escapeRegex = (string: string)=> {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}