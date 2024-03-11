<h1 align="center">Welcome to One Dionys - Template Engine! 👋 </h1>

<p align="center">A library for easily creating and manipulating HTML templates. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-template-engine?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-template-engine?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-template-engine?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-template-engine?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-template-engine.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-template-engine?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-template-engine?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const TemplateEngine = require('./src/templateEngine');

// Define your template
const template = 'Hello {{ name }}!';

// Create an instance of TemplateEngine with your template
const engine = new TemplateEngine(template);

// Define your data
const data = { name: 'World' };

// Render the template with the data
const result = engine.render(data);
console.log(result); // Output: Hello World!
```

#### Explanation

* The TemplateEngine class provides a way to render templates with dynamic data. It uses double curly braces ({{ }}) as placeholders for variables in the template. When you call the render() method with a data object, it replaces the placeholders with corresponding values from the data object.

#### Return Value

* The render() method returns the rendered template as a string.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Template Engine is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Template Engine? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
