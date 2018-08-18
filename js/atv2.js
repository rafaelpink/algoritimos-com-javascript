function deMaior() {
  var ano = document.getElementById('anoNascimento');
  var idade = 2018 - ano.value;
  console.log(idade)
  // PEGAR ANO DO SISTEMA
  var DataSistema = new Date();
  var anoSistema = DataSistema.getFullYear();
  console.log(DataSistema);
  console.log(anoSistema);
}
