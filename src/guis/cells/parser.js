// ---NEED TO BUILD A PARSER!!!-----

// ----CONSTANTS-----

const DIGITS = "0123456789.";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const parseFormula = (text, cells) => {
  if (text[0] === "=") {
    return parseExpr(text.slice(1), cells);
  } else {
    return text;
  }
};

const parseExpr = (expr, cells) => {
  const tokens = expr.split(/:|,|\(|\)/g);
  if (tokens.length === 4) {
    const obj1 = cells.find(
      (cell) => cell.col === tokens[1][0] && cell.row === parseInt(tokens[1][1])
    );
    const obj2 = cells.find(
      (cell) => cell.col === tokens[2][0] && cell.row === parseInt(tokens[2][1])
    );
    const cellRange = cells.filter(
      (cell) =>
        cell.col <= obj2.col &&
        cell.row <= obj2.row &&
        cell.col >= obj1.col &&
        cell.row >= obj1.row
    );
    if (tokens[0] === "sum") {
      return result(sum, cellRange);
    }
  } else if (tokens.length === 1) {
    const ref = cells.find(
      (cell) => cell.col === tokens[0][0] && cell.row === parseInt(tokens[0][1])
    );
    if (ref) return ref.value;
  }
};

const sum = (values) => {
  return values.reduce((a, b) => a + b);
};

const result = (fun, range) => {
  const values = range.map((cell) => parseInt(cell.value));
  return fun(values);
};
