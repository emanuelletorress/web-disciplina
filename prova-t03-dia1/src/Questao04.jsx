/*
Suponhamos que há uma hierarquia de componentes e que o componente pai quer passar uma prop para 
o componente filho mais profundo na árvore; com props drilling, a prop teria que atravessar todos
os nós daquele ramo até que chegasse no filho.
Através dos Contextos, o nó pai providencia um contexto e qualquer nó filho pode fazer uso dele,
sem precisar penetrar os nós intermediários.
*/