const capitalize = (string) => {
    const capitalfirst = string.slice(0,1).toUpperCase();
    const restletters = string.slice(1,string.length);
    const capitalizestring = capitalfirst.concat(restletters);
    return capitalizestring;
  }
  
module.exports = capitalize;