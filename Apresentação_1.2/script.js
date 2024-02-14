// function checkAnswer(selectedImage) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById("resposta");

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }


// // Questão 2

// function checkAnswer(selectedImage) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById("resposta2");

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }

// // Questão 3

// function checkAnswer(selectedImage) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById("resposta3");

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }

// // Questão 4

// function checkAnswer(selectedImage) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById("resposta4");

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }

// // Questão 5

// function checkAnswer(selectedImage) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById("resposta5");

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }

// function checkAnswer(selectedImage, respostaId) {
//     const correctImage = 2; // Número da imagem correta
//     const feedback = document.createElement("div");
//     feedback.classList.add("feedback");
//     const resposta = document.getElementById(respostaId);

//     if (selectedImage === correctImage) {
//         feedback.textContent = "Parabéns! Você acertou!";
//         feedback.classList.add("correct");
//     } else {
//         feedback.textContent = "Ops! Você errou. Tente novamente.";
//         feedback.classList.add("incorrect");
//     }

//     resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
//     resposta.appendChild(feedback);
// }


function checkAnswer(selectedImage, respostaId, correctImage) {
    const feedback = document.createElement("div");
    feedback.classList.add("feedback");
    const resposta = document.getElementById(respostaId);

    if (selectedImage === correctImage) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.classList.add("correct");
    } else {
        feedback.textContent = "Ops! Você errou. Tente novamente.";
        feedback.classList.add("incorrect");
    }

    resposta.innerHTML = ""; // Limpa qualquer conteúdo anterior
    resposta.appendChild(feedback);
}
