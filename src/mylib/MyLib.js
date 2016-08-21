export default function sum (a, b, cb) {
  if (cb) {
    cb(a+b);
  }
}