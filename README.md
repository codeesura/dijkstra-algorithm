<a name="readme-top"></a>


<p align="center">
  <a href="https://github.com/codeesura/dijkstra-algorithm/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/codeesura/dijkstra-algorithm.svg?style=for-the-badge" alt="Contributors">
  </a>
  
  <a href="https://github.com/codeesura/dijkstra-algorithm/network/members">
    <img src="https://img.shields.io/github/forks/codeesura/dijkstra-algorithm.svg?style=for-the-badge" alt="Forks">
  </a>
  
  <a href="https://github.com/codeesura/dijkstra-algorithm/stargazers">
    <img src="https://img.shields.io/github/stars/codeesura/dijkstra-algorithm.svg?style=for-the-badge" alt="Stars">
  </a>
  
  <a href="https://github.com/codeesura/dijkstra-algorithm/issues">
    <img src="https://img.shields.io/github/issues/codeesura/dijkstra-algorithm.svg?style=for-the-badge" alt="Issues">
  </a>
  
  <a href="https://github.com/codeesura/dijkstra-algorithm/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/codeesura/dijkstra-algorithm.svg?style=for-the-badge" alt="MIT License">
  </a>
</p>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dijkstra Algorithm Implementation</h3>

  <p align="center">
    A robust and efficient JavaScript implementation of the Dijkstra Algorithm to solve the shortest path problem in graph data structures.
    <br />
    <a href="https://github.com/codeesura/dijkstra-algorithm">View Demo</a>
    ·
    <a href="https://github.com/codeesura/dijkstra-algorithm/issues">Report Bug</a>
    ·
    <a href="https://github.com/codeesura/dijkstra-algorithm/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#dijkstra-algorithm">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Dijkstra Algorithm

This project introduces a highly efficient JavaScript implementation of the renowned Dijkstra's algorithm, wrapped in a user-friendly PriorityQueue class. It's designed for those who need to find the shortest path in complex network graphs, like the ones commonly found in routing and navigation problems or network flow optimization.

Here's why this project stands out:
* **Time-Efficiency:** You can integrate this into your systems to solve shortest-path problems with blazing speed.
* **Ease of Use:** The `PriorityQueue` class abstracts the complexity of the algorithm, providing a clean and simple interface for users to implement in their projects.
* **DRY Code:** Why reinvent the wheel? The modular design follows the DRY (Don't Repeat Yourself) principle, making your coding process more efficient.

This template is not just a mere set of functions; it's a comprehensive solution for those looking to enhance their applications with optimal pathfinding capabilities. The project is open for contributions, and suggestions for improvements are always welcome. Whether you're dealing with financial networks, social networks, or logistical maps, this algorithm is versatile enough to cater to a wide array of applications.

Use this template to jump-start your project, and never worry about the underlying complexities of graph-based problem solving again.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To set up this project locally, follow these simple steps.

### Prerequisites

This project uses bun for dependency management. Make sure you have bun installed on your system.

* bun
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/codeesura/dijkstra-algorithm.git
   ```
2. Install bun packages
   ```sh
   bun install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

The `main.js` file includes a PriorityQueue class and an implementation of Dijkstra's algorithm. Here's how you can use it in your project:

### PriorityQueue Example
```javascript
let pq = new PriorityQueue();
pq.enqueue("Item1", 1);
pq.enqueue("Item2", 2);
let item = pq.dequeue(); // Returns "Item1"
```

### Dijkstra's Algorithm Example

```javascript
let graph = {
  start: { A: 6, B: 2 },
  A: { finish: 1 },
  B: { A: 3, finish: 5 },
  finish: {}
};

let costs = dijkstra(graph);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Implement PriorityQueue class.
- [x] Implement Dijkstra's algorithm.
- [ ] Add additional examples and more complex use cases in documentation.
- [ ] Create an extended guide for different scenarios where Dijkstra's algorithm can be applied.
- [ ] Implement additional graph algorithms and data structures for broader utility.

Check the [open issues](https://github.com/codeesura/dijkstra-algorithm/issues) for a list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make to the PriorityQueue and Dijkstra's algorithm implementation are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request or open an issue with the tag "enhancement". Don't forget to give the project a star if you find it helpful! Thank you for your support!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

codeesura - [@codeesura](https://twitter.com/codeesura) - codeesura@gmail.com

Project Link: [https://github.com/codeesura/dijkstra-algorithm](https://github.com/codeesura/dijkstra-algorithm)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project wouldn't be possible without the extensive resources available for understanding and implementing Dijkstra's algorithm. We'd like to acknowledge the following:

* [Wikipedia's Dijkstra's Algorithm Page](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) - For providing a detailed explanation of the algorithm and its complexity, which is fundamental to any implementation.
* [GeeksforGeeks Dijkstra's Algorithm Guide](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/) - For offering step-by-step tutorials and examples that were instrumental in understanding the practical aspects of the algorithm.
* [Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) - For providing a comprehensive guide to algorithms, which is an essential resource for computer science students and professionals alike.
* [Visualgo.net](https://visualgo.net/en/sssp) - For offering interactive animations of various algorithms, including Dijkstra's, which greatly aids in visualizing the algorithm's step-by-step execution.
* [The Algorithm Design Manual by Steven S. Skiena](https://www.algorist.com/) - For being a practical reference with a rich set of problems and solutions, helping to contextualize Dijkstra's algorithm in real-world applications.

These resources have contributed significantly to the development of the Dijkstra's algorithm implementation in our project and are highly recommended for anyone looking to deepen their understanding of graph algorithms.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
