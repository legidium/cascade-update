const random = (min, max) => Math.floor(Math.random() * max + min);

const shuffle = array => {
  const [...result] = array;
  let counter = result.length;
  let temp;
  while (counter > 0) {
    const index = random(0, counter);
    counter--;
    temp = result[counter];
    result[counter] = result[index];
    result[index] = temp;
  }
  return result;
};

export const createValues = (values, items) => {
  return Object.keys(items).reduce((result, name) => {
    const from = shuffle(items[name]);
    const end = random(1, from.length);
    const value = from.slice(0, end);
    return { ...result, [name]: value };
  }, values);
};

const generateItems = (factor = 1) => {
  const len = random(1, 10);
  const items = Array(len)
    .fill(null)
    .map((_, i) => (factor * (i + 1)).toString());
  return shuffle(items);
};

export const createItems = () => ({
  branches: generateItems(10),
  accountTypes: generateItems(100)
});
