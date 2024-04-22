class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}
	// Traversal: BFS A -> B -> C -> D -> E -> F -> G
	BFS() {
		let queue = [this.root];
		let result = [];
		while (queue.length) {
			let node = queue.shift();
			result.push(node.data);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return result;
	}
	// Traversal: DFS: Recursion -> Stack
	// traversal preorder A -> B -> D -> E -> C -> F -> G
	preOrder() {
		let result = [];
		function traverse(currentNode) {
			result.push(currentNode.data);
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
		}

		traverse(this.root);
		return result;
	}
	// traversal postorder A -> D -> E -> B -> F -> G -> C
	postOrder() {
		let result = [];
		function traversal(currentNode) {
			if (currentNode.left) traversal(currentNode.left);
			if (currentNode.right) traversal(currentNode.right);
			result.push(currentNode.data);
		}
		traversal(this.root);
		return result;
	}
	// traversal inorder
	inOrder() {
		let result = [];
		function traversal(currentNode) {
			if (currentNode.left) traversal(currentNode.left);
			result.push(currentNode.data);
			if (currentNode.right) traversal(currentNode.right);
		}
		traversal(this.root);
		return result;
	}
}

const tree = new Tree();
tree.root = new Node('A');
tree.root.left = new Node('B');
tree.root.right = new Node('C');
tree.root.left.left = new Node('D');
tree.root.left.right = new Node('E');
tree.root.right.left = new Node('F');
tree.root.right.right = new Node('G');
console.log(tree.BFS());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
