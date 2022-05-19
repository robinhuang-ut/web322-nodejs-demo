// If `dir`, `root` and `base` are provided,
// `${dir}${path.sep}${base}`
// will be returned. `root` is ignored.
const path = require('path');
let pf = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  });
  // Returns: '/home/user/dir/file.txt'
  
  // `root` will be used if `dir` is not specified.
  // If only `root` is provided or `dir` is equal to `root` then the
  // platform separator will not be included. `ext` will be ignored.
let pf2 = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  });
  // Returns: '/file.txt'
  
  // `name` + `ext` will be used if `base` is not specified.
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
  });
  // Returns: '/file.txt'

  console.log(pf2);