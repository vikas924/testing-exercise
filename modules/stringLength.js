const stringlength = (string) => {
    let count = string.length;
    if ((count > 1) && (count < 10)){
       return count;
    } else if (count > 10) {
      throw new Error('String is too long');
    } else {
      throw new Error('String is not valid'); 
    }
}

module.exports = stringlength;