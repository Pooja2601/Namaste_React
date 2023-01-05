<!-- ● What is Emmet? -->
Emmet is plugin in vs code which coverts abrrevation into code or work like an snippet for faster coding. Note : By default vs code doesn't enable React Emmet, we need to set that up manually in setting.json file.

<!-- ● Difference between a Library and Framework? -->
Both libraries and frameworks are developed to make our work easier, however library is an utils which we can import and use whereas Framework, has it own routing, we need to call it according to framework flow. Incase of library programmer is in charge of using it where and when needed.

<!-- ● What is CDN? Why do we use it? -->
CDN stands for content delivery network, it is basically an distributed network from where we can get our data in less time and less traffic. It also helps in better security, better Ui experience and less letancy.

<!-- ● Why is React known as React? -->
React was developed by Facebook and reason why react is known as react is because of its reactive behavior towards UI changes.

<!-- ● What is crossorigin in script tag? -->
Cross origin tag in script tag means that if we try to access script from different origin or server. It is a mechanism that allows resources on a web page to be requested from another domain outside their own domain.
Other attributes like same origin means that a web page can only interact with other documents that are also on the same server.

<!-- ● What is diference between React and ReactDOM -->
React is core library utils whereas React DOM is for Dom manipulation.
The react package contains React.createElement, React.createClass and React.Component, React.PropTypes, React.Children, and the other helpers related to elements and component classes. We think of these as the isomorphic or universal helpers that you need to build components.

The react-dom package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, and ReactDOM.findDOMNode, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

<!-- ● What is difference between react.development.js and react.production.js files via CDN? -->
react.development.js are meants for development but are not suitable for production.
Production version should be minified and optimzed for performance therefore we have react.production.js.

<!-- ● What is async and defer? - -->

Difference between async and defer attribute is,
In async attribute script, HTML executes and paraellely fetches scripts from network, but as soon as fetching is done it stops html execution and starts executing scripts once scripts is executed. It starts HTML execution.

In defer attribute script, HTML executes and paraellely fetches scripts from network, but as soon as fetching is done it executes or parses HTML, and after that it executes script.

Note: In async attribute script, order of execution is not guaranteed. In defere attribute script it executes in order.