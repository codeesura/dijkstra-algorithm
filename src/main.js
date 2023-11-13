/**
 * The above code defines a PriorityQueue class and implements Dijkstra's algorithm to find the
 * shortest path between two nodes in a graph.
 * @param pools - The `pools` parameter is an array of objects representing pools. Each pool object has
 * the following properties:
 * @returns The `dijkstra` function returns an array of objects representing the path from the start
 * address to the end address in the given graph. Each object in the array contains the following
 * properties:
 * - `address`: the address of the current node in the path
 * - `previousAddress`: the address of the previous node in the path
 * - `reserve0`: the reserve of the base token in the current
 */
class PriorityQueue {
  constructor(comparator = (a, b) => a.distance < b.distance) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  peek() {
    return this._heap[0];
  }

  enqueue(value) {
    this._heap.push(value);
    this._siftUp();
  }

  dequeue() {
    const poppedValue = this.peek();
    const bottomValue = this._heap.pop();
    if (this.size() > 0) {
      this._heap[0] = bottomValue;
      this._siftDown();
    }
    return poppedValue;
  }

  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this._greater(Math.floor((node - 1) / 2), node)) {
      this._swap(node, Math.floor((node - 1) / 2));
      node = Math.floor((node - 1) / 2);
    }
  }

  _siftDown() {
    let node = 0;
    while (
      (node * 2 + 1 < this.size() && this._greater(node, node * 2 + 1)) ||
      (node * 2 + 2 < this.size() && this._greater(node, node * 2 + 2))
    ) {
      let maxChild =
        node * 2 + 2 < this.size() && this._greater(node * 2 + 1, node * 2 + 2)
          ? node * 2 + 2
          : node * 2 + 1;
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

/**
 * The function creates a graph data structure based on an array of pool objects.
 * @param pools - An array of objects representing pools. Each pool object has the following
 * properties:
 * @returns a graph object that represents the connections between pools. Each pool is represented by
 * its address, and for each pool, there is an array of objects representing the connections to other
 * pools. Each object in the array contains the address of the connected pool, the reserves of the
 * tokens in the pool, and the decimals of the tokens.
 */
function createGraph(pools) {
  const graph = {};
  pools.forEach((pool) => {
    const { address0, address1 } = pool;
    if (!graph[address0]) graph[address0] = [];
    if (!graph[address1]) graph[address1] = [];
    graph[address0].push({
      address: address1,
      reserve0: pool.base_token.attributes.reserves,
      reserve1: pool.quote_token.attributes.reserves,
      decimals0: pool.base_token.attributes.decimals,
      decimals1: pool.quote_token.attributes.decimals,
    });
    graph[address1].push({
      address: address0,
      reserve0: pool.quote_token.attributes.reserves,
      reserve1: pool.base_token.attributes.reserves,
      decimals0: pool.quote_token.attributes.decimals,
      decimals1: pool.base_token.attributes.decimals,
    });
  });
  return graph;
}

/**
 * The `dijkstra` function implements Dijkstra's algorithm to find the shortest path between two
 * addresses in a graph.
 * @param graph - The `graph` parameter is an object that represents the graph of addresses and their
 * connections. Each key in the object represents an address, and the corresponding value is an array
 * of neighboring addresses.
 * @param startAddress - The `startAddress` parameter is the address of the starting node in the graph.
 * It represents the node from which the shortest path will be calculated.
 * @param endAddress - The `endAddress` parameter in the `dijkstra` function represents the destination
 * address in the graph. It is the address that you want to find the shortest path to from the
 * `startAddress`.
 * @returns an array of objects representing the shortest path from the startAddress to the endAddress
 * in the given graph. Each object in the array represents a node in the path and contains the
 * following properties: address, previousAddress, reserve0, reserve1, decimals0, and decimals1.
 */
function dijkstra(graph, startAddress, endAddress) {
  const distances = {};
  const previous = {};
  const nodes = new PriorityQueue((a, b) => a.distance < b.distance);
  const path = [];

  // Set distances to all nodes to be infinity except the start node
  Object.keys(graph).forEach((address) => {
    distances[address] = Infinity;
    previous[address] = null;
  });

  // Set start node distance to 0 and enqueue it
  distances[startAddress] = 0;
  nodes.enqueue({ address: startAddress, distance: 0 });

  while (!nodes.isEmpty()) {
    const smallest = nodes.dequeue();

    if (smallest.address === endAddress) {
      // We found the destination and can build the path
      let currentAddress = endAddress;
      while (previous[currentAddress]) {
        path.push({
          address: currentAddress,
          previousAddress: previous[currentAddress].address,
          reserve0: previous[currentAddress].reserve0,
          reserve1: previous[currentAddress].reserve1,
          decimals0: previous[currentAddress].decimals0,
          decimals1: previous[currentAddress].decimals1,
        });
        currentAddress = previous[currentAddress].address;
      }
      path.reverse();
      return path;
    }

    if (smallest.address && graph[smallest.address]) {
      graph[smallest.address].forEach((neighbor) => {
        const alt =
          distances[smallest.address] + neighbor.reserve1 / neighbor.reserve0; // This line might need modification based on what 'distance' means in this context
        if (alt < distances[neighbor.address]) {
          distances[neighbor.address] = alt;
          previous[neighbor.address] = {
            address: smallest.address,
            reserve0: neighbor.reserve0,
            reserve1: neighbor.reserve1,
            decimals0: neighbor.decimals0,
            decimals1: neighbor.decimals1,
          };
          nodes.enqueue({
            address: neighbor.address,
            distance: alt,
          });
        }
      });
    }
  }

  return path;
}
