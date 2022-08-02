const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
console.log(`Primeiro ator/atriz: `, filme.elenco[0]);
console.log(`Último ator/atriz: `, filme.elenco[3]);
console.log(`Transmissões hoje: `, filme.transmissoesHoje);
console.log(`Canal Brasil - horário: `, filme.transmissoesHoje[1]);

// Perguntar sobre o último console.log



