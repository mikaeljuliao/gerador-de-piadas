// Frases motivacionais

// Piadas em Português - Simuladas como se fossem de uma API
const piadas = [
  "Por que o programador não gosta de natureza? Porque tem muitos bugs.",
  "Programador não chora... ele dá rage quit.",
  "Por que o JavaScript foi ao terapeuta? Porque tinha problemas de escopo.",
  "O que o HTML disse para o CSS? ‘Você me completa!’",
  "Como o Dev termina um relacionamento? 'git push origin master'.",
   "Qual a banda favorita dos programadores? Linkin Park… porque sempre dá '404 not found'.",
  "Por que o programador levou um travesseiro para o trabalho? Porque estava com sono em produção.",
  "Erro 404: Piada não encontrada. (Essa vale por si só!)",
  "Qual o sistema de som favorito do programador? SoundCloud Computing.",
  "O que acontece quando um Dev dorme demais? Ele perde o commit do dia.",
  "Qual o maior medo de um Dev? Um bug em produção... e outro dev que viu.",
  "Como programador pede desculpa? ‘Foi má indentação.’",
  "Por que o código se sentiu inseguro? Porque ele tinha muitas variáveis.",
  "Por que a função terminou o relacionamento? Porque estava cheia de argumentos.",
  "A diferença entre um programador e um mágico? O mágico faz o erro desaparecer, o programador só esconde no console.",
  "Por que o Dev levou o notebook ao médico? Porque ele travava toda hora.",
  "O código do Dev era tão bagunçado que nem o Stack Overflow quis ajudar.",
  "Qual o animal favorito dos programadores? O Python.",
  "O que um array falou para o outro? ‘Me inclui nessa!’",
  "Por que o site foi preso? Porque tinha muitos cookies sem consentimento.",
  "O Dev foi pra balada e tentou dar um commit no crush… mas recebeu um merge conflict.",
  "O que o CSS disse ao JavaScript? ‘Sem você eu sou só aparência.’",
  "Por que o Dev não conseguiu sair do labirinto? Porque estava dentro de um loop infinito.",
  "Programador também tem sentimentos... só não tem tratamento de erro emocional.",
  "Como o Dev arruma a vida? Com um git reset --hard.",
  "O Dev estava tão cansado que fez push na main... sem testar.",
  "Por que o Dev nunca se perde? Porque sempre segue o caminho do return."
];

function getJoke() {
  const random = Math.floor(Math.random() * piadas.length);
  document.getElementById("joke").innerText = piadas[random];
}