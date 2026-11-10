# Respostas — Atividade Tailwind CSS

## 1. O que significa "utility-first"? Cite uma vantagem e uma desvantagem em relação ao CSS tradicional.

Utility-first é uma forma de estilizar em que usamos pequenas classes prontas diretamente no elemento, como `p-4`, `text-center` e `bg-amber-600`, em vez de criar uma regra CSS para cada componente.

**Vantagem:** costuma agilizar o desenvolvimento, porque podemos aplicar estilos sem ficar alternando entre o JSX e um arquivo CSS.

**Desvantagem:** o `className` pode ficar comprido e visualmente carregado quando o elemento tem muitos estilos.

## 2. Qual a diferença entre `md:text-6xl` e `text-6xl`? Por que dizemos que o Tailwind é mobile-first?

`text-6xl` aplica o tamanho grande do texto em todas as larguras de tela. Já `md:text-6xl` aplica esse tamanho somente a partir do breakpoint médio, que começa em 768px.

Dizemos que o Tailwind é mobile-first porque as classes sem prefixo definem o estilo inicial, usado também em celulares. Os prefixos, como `md:` e `lg:`, permitem mudar o estilo em telas maiores.

## 3. Explique o que cada classe faz: `flex items-center justify-between`.

- `flex`: ativa o Flexbox e coloca os elementos filhos em uma linha por padrão.
- `items-center`: alinha os elementos no centro do eixo cruzado, verticalmente em uma linha.
- `justify-between`: distribui os elementos pelo eixo principal, deixando o espaço livre entre eles.

## 4. No exercício 4 você escreveu as classes do card uma única vez e elas valeram para os seis produtos. Explique por que isso aconteceu. Como você faria isso se a página fosse só HTML puro, sem React?

Isso aconteceu porque o componente `CardProduto` é reutilizado. O `Cardapio.jsx` percorre a lista com `map()` e cria uma instância do componente para cada produto. Como todos usam o mesmo componente, recebem a mesma estrutura e as mesmas classes; só os dados, como nome, preço, descrição e imagem, mudam.

Em HTML puro, sem React, eu precisaria escrever a estrutura e as classes de cada card separadamente para os seis produtos, ou usar JavaScript para gerar os elementos a partir de uma lista.

## 5. Qual a diferença entre `p-4` e `m-4`? E entre `gap-4` e `space-y-4`?

- `p-4`: cria espaçamento interno entre o conteúdo e a borda do elemento (padding).
- `m-4`: cria margem externa ao redor do elemento (margin).
- `gap-4`: cria espaço entre os itens de um contêiner Flexbox ou Grid, tanto na direção horizontal quanto na vertical conforme o layout.
- `space-y-4`: cria espaçamento vertical entre os elementos filhos diretos, adicionando espaço entre eles no eixo de cima para baixo.

## Desafios bônus realizados

1. **Menu mobile funcional:** o botão ☰ aparece em telas pequenas e abre ou fecha os links de navegação. Ao escolher um link, o menu fecha.
2. **Selo "Novo":** o card do Espresso mostra o selo porque o produto tem a propriedade `novo: true`. Os outros cards não exibem o selo.
