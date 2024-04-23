const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
};

function dfs(graph, source) {
	let stack = [];
	let visited = [];
	stack.push(source);
	while (stack.length) {
		let currentNode = stack.pop();
		visited.push(currentNode);
		for (let edge of graph[currentNode]) {
			stack.push(edge);
		}
	}
	return visited;
}

function dfsRecursive(graph, source, visited = []) {
	visited.push(source);
	for (let edge of graph[source]) {
		dfsRecursive(graph, edge, visited);
	}
}
console.log(dfs(graph, 'a'));
let visited = [];
console.log(dfsRecursive(graph, 'a', visited));
console.log(visited);
