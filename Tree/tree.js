class Node {
	constructor(data) {
		(this.data = data), (this.left = null), (this.right = null);
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}
	// tranversal BFS A -> B -> C -> D -> E -> F -> G
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
	// traversal inorder
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
