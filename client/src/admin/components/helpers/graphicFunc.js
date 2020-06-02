export function alunoIdade(alunos) {
  let idades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < alunos.length; i++) {
    let nasc = new Date(alunos[i].data_nasc);
    let nasc_ano = nasc.getFullYear();
    let inicio = new Date(alunos[i].created);
    let inicio_ano = inicio.getFullYear();
    let idade = parseInt(inicio_ano) - parseInt(nasc_ano);

    switch (true) {
      case idade >= 5 && idade <= 9:
        idades[1] += 1;
        break;

      case idade >= 10 && idade <= 15:
        idades[2] += 1;
        break;
      case idade >= 16 && idade <= 18:
        idades[3] += 1;
        break;
      case idade >= 19 && idade <= 30:
        idades[4] += 1;
        break;
      case idade >= 31 && idade <= 39:
        idades[5] += 1;
        break;
      case idade >= 40 && idade <= 50:
        idades[6] += 1;
        break;
      case idade >= 51 && idade <= 59:
        idades[7] += 1;
        break;
      case idade >= 60:
        idades[8] += 1;
        break;
      default:
        idades[9] += 1;
    }
  }
  console.log(idades);
  return idades;
}

export function monthRegister(data, ano) {
  let data_ano = ano;
  let alunos_dados = {
    ano: ano,
    mes_dados: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };
  for (let i = 0; i < data.length; i++) {
    let data_inicio = new Date(data[i].data_inicio);
    let data_mes = data_inicio.getMonth();
    let data_ano = data_inicio.getFullYear();

    if (data_ano === ano) {
      switch (data_mes) {
        case 0:
          alunos_dados.mes_dados[0] += 1;
          break;

        case 1:
          alunos_dados.mes_dados[1] += 1;
          break;

        case 2:
          alunos_dados.mes_dados[2] += 1;
          break;
        case 3:
          alunos_dados.mes_dados[3] += 1;
          break;
        case 4:
          alunos_dados.mes_dados[4] += 1;
          break;
        case 5:
          alunos_dados.mes_dados[5] += 1;
          break;
        case 6:
          alunos_dados.mes_dados[6] += 1;
          break;
        case 7:
          alunos_dados.mes_dados[7] += 1;
          break;
        case 8:
          alunos_dados.mes_dados[8] += 1;
          break;
        case 9:
          alunos_dados.mes_dados[9] += 1;
          break;
        case 10:
          alunos_dados.mes_dados[10] += 1;
          break;
        case 11:
          alunos_dados.mes_dados[11] += 1;
          break;
      }
    }
  }
  return alunos_dados;
}
