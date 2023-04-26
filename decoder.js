let criptoBtn = document.querySelector("#criptoBtn");
let decriptoBtn = document.querySelector("#decriptoBtn");
let copyBtn = document.querySelector("#copy");
let textCripto = document.querySelector("#msg-decodificada");
let text = document.querySelector("#text_area");

function hide() {
  let hideDiv = document.querySelector(".hide");
  if (textCripto.value != "") {
    hideDiv.style.display = "none";
  }
}

const criptografar = () => {
  hide();
  let text = document.querySelector("#text_area").value;
  if (text.match(/[^a-zA-Z\s]/) || text.match(/[AEIOU]/)) {
    alert("Apenas letras minúsculas e sem acento. Tente novamente!");
  } else {
    const substituicoes = {
      e: "enter",
      a: "ai",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    newstr = text.replace(/[eaiou]/g, (match) => substituicoes[match]);

    textCripto.innerText = newstr;
  }
  hide();
};

// const descriptografar = () => {
//   hide();
//   let text = document.querySelector("#text_area").value;
//   if (text.match(/[^a-zA-Z\s]/) || text.match(/[AEIOU]/)) {
//     alert("Apenas letras minúsculas e sem acento. Tente novamente!");
//   } else {
//     function substituir(text) {
//       const substituicoes = {
//         enter: "e",
//         ai: "a",
//         imes: "i",
//         ober: "o",
//         ufat: "u",
//       };

//       let newstr = text;

//       for (let padrao in substituicoes) {
//         const regex = new RegExp(padrao, "g");
//         newstr = newstr.replace(regex, substituicoes[padrao]);
//       }

//       return newstr;
//     }

//     textCripto.innerText = substituir(newstr);
//   }
//   hide();
// };

const descriptografar = () => {
  hide();
  let text = document.querySelector("#text_area").value;
  if (text.match(/[^a-zA-Z\s]/) || text.match(/[AEIOU]/)) {
    alert("Apenas letras minúsculas e sem acento. Tente novamente!");
  } else {
    const substituicoes = {
      enter: "e",
      ai: "a",
      imes: "i",
      ober: "o",
      ufat: "u",
    };

    let newstr = text;

    for (let padrao in substituicoes) {
      const regex = new RegExp(padrao, "g");
      newstr = newstr.replace(regex, substituicoes[padrao]);
    }

    textCripto.innerText = newstr;
  }
  hide();
};

const copy = () => {
  textCripto.select();
  document.execCommand("copy");
  text.value = "";
};

criptoBtn.addEventListener("click", criptografar);
decriptoBtn.addEventListener("click", descriptografar);
copyBtn.addEventListener("click", copy);
