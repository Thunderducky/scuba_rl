export const $ = q => document.querySelector(q);
export const flatten = arr => arr.reduce((total, line) => total.concat(line), []);
