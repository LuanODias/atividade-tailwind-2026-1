1. O que significa "utility-first"? Cite **uma vantagem** e **uma desvantagem** em relação ao CSS tradicional.

- Utility-first é uma abordagem de estilização em CSS que constrói interfaces diretamente no HTML usando classes pequenas e de propósito único, em vez de criar classes grandes e específicas personalizadas para cada componente.

- VANTAGEM: Você ganha agilidade no desenvolvimento, já que não precisa alternar constantemente entre os arquivos HTML e CSS nem perder tempo inventando nomes para classes (como card-container-wrapper). A estilização acontece de forma direta e previsível no próprio elemento.

- DESVANTAGEM: Como cada estilo exige uma classe diferente, os elementos HTML podem ficar longos e difíceis de ler devido ao acúmulo de dezenas de classes em uma única tag, e isso causa muita poluição visual.


2. Qual a diferença entre `md:text-6xl` e `text-6xl`? Por que dizemos que o Tailwind é *mobile-first*? 

- A diferença está em quando o tamanho da fonte é aplicado, onde text-6xl aplica o estilo em todos os tamanhos de tela, enquanto md:text-6xl aplica o estilo apenas a partir de telas médias (768px ou maiores). O Tailwind CSS é considerado mobile-first porque suas classes sem prefixo definem o estilo padrão para celulares, e os prefixos responsivos servem para sobrescrever essas regras em telas maiores.


3. Explique o que cada classe faz: `flex items-center justify-between`.

- FLEX: Torna o elemento uma flexbox, ou seja, é o mesmo que "display: flex" no CSS

- ITEMS-CENTER: Alinha elementos "filhos" no centro de eixo vertical

- JUSTIFY-BETWEEN: Distribui o espaço livre entre os elementos no eixo horizontal


4. No exercício 4 você escreveu as classes do card uma única vez e elas valeram para os seis produtos. Explique **por que** isso aconteceu. Como você faria isso se a página fosse só HTML puro, sem React?

- Isso aconteceu por causa do ".map", que renderiza as informações que eu dei na div para todos os cards gerados.
- No HTML puro eu teria que copiar divs e classes e colar em todos os cards separadamente, oq que dificultaria caso eu tivesse algum problema neles e tivesse que corrigir manualmente.


5. Qual a diferença entre `p-4` e `m-4`? E entre `gap-4` e `space-y-4`?

- p-4 (Padding): Adiciona um espaçamento interno de 1rem entre o conteúdo e a borda do elemento. Se o elemento tiver uma cor de fundo, essa área interna exibirá essa cor.

- m-4 (Margin): Adiciona um espaçamento externo de 1rem fora da borda do elemento. Ele empurra os elementos vizinhos e permanece transparente.

////////////

- gap-4: Usa a propriedade moderna gap: 1rem; do CSS. Ela funciona apenas em contêineres que usam Flexbox (flex) ou Grid (grid). A grande vantagem é que ela aplica o espaço exatamente entre os itens (tanto na horizontal quanto na vertical, se quebrarem de linha), sem deixar sobras nas pontas.

- space-y-4: É um truque do Tailwind que aplica margin-top: 1rem; em todos os elementos filhos, exceto no primeiro (usando o seletor CSS > * + *). Ele funciona em contêineres normais (block), mas cria espaço apenas no eixo vertical (eixo Y).