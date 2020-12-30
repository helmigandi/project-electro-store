let data = 'macbook pro m1 test';

function capitalizeFirstLetter (dataTest){
  return dataTest
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeFirstLetter(data));