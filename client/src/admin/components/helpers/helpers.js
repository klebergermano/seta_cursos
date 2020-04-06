export function dateFormatDB(date) {
  //Recebe datatyme

  let newDate = new Date(date);

  var dia = newDate.getDate();
  var diaF = (dia + "").padStart(2, "0");

  var mes = newDate.getMonth() + 1;

  var mesF = (mes + "").padStart(2, "0");

  var ano = newDate.getFullYear();
  var dateDB = ano + "-" + mesF + "-" + diaF;
  return dateDB; // yyyy-mm-dd
}

export function dateFormatBR(date) {
  let newDate = new Date(date);

  var dia = newDate.getDate();

  var mes = newDate.getMonth() + 1;

  var ano = newDate.getFullYear();
  var dateBR = dia + "/" + mes + "/" + ano;
  return dateBR; // dd/mm/yyyy
}

export function dateFormatReverse(date) {
  //Recebe string data dd/mm/yyyy

  let data = date.split("/");
  let dia = data[0];
  var diaF = (dia + "").padStart(2, "0");

  let mes = data[1];
  var mesF = (mes + "").padStart(2, "0");

  let ano = data[2];
  (mes + "").padStart(2, "0");

  let dateReverse = ano + "-" + mesF + "-" + diaF;
  return dateReverse; // yyyy-mm-dd
}

export function AddDateMonth(index, date) {
  let i = index;
  let vencimento_data = date; //formato deve ser o mesmo do DB  "yyyy-mm-dd" ex: "2020-01-02"
  vencimento_data = vencimento_data.split("-");
  let dia_split = vencimento_data[2];
  let mes_split = vencimento_data[1];
  let ano_split = vencimento_data[0];
  let mes_futuro = parseInt(mes_split) + i;
  mes_split = mes_futuro;
  if (mes_split > 12) {
    mes_split = mes_split - 12;
    ano_split = parseInt(ano_split) + 1;
    // alert("mes futuro" + mes_futuro + "-" + 12 + "=" + mes_split);
  }
  if (dia_split > "28" && mes_split == "2") {
    dia_split = "28";
  } else if (dia_split > "30") {
    switch (mes_split) {
      case 4:
        dia_split = "30";
        break;
      case 6:
        dia_split = "30";
        break;

      case 9:
        dia_split = "30";
        break;
      case 11:
        dia_split = "30";
        break;
    }
  }
  let data_final =
    ano_split +
    "-" +
    (parseInt(mes_split) + "").padStart(2, "0") +
    "-" +
    (parseInt(dia_split) + "").padStart(2, "0");

  return data_final;
}
