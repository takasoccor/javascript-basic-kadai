num=10;

if(num%3<1&&num%5>=1){
  console.log('3の倍数です');
}
else if(num%5<1&&num%3>=1){
  console.log('5の倍数です');
}
else if(num%3<1&&num%5<1){
  console.log('3と5の倍数です');
}
else{
  console.log(num);
}