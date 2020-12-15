
import React from 'react';
let marked = require("marked");
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![A cute doll](https://i.pinimg.com/564x/ae/5c/8f/ae5c8fac951f5f374cf520184fb9e3ef.jpg)
`;

export default class App extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			inputValue: placeholder
		}

		this.updateInput = this.updateInput.bind(this);
		this.resetCode = this.resetCode.bind(this);
	};//end of constructor

	updateInput(event){
		this.setState({
			inputValue: event.target.value
		});
	}

	resetCode(){

	var r = window.confirm("Are you sure you want to reset the code?");
		if(r == true){
			this.setState({
			inputValue: placeholder
		});
		}
	}

render(){
  return (
    <div className="App"> 
    <h1 id = "header">My Markdown Previewer</h1>
    <button  className = "button" onClick={this.resetCode}>Reset code</button>
      <div className = "container">
      	<div id = "left-cont">
	        <textarea id="editor" value = {this.state.inputValue} onChange = {this.updateInput} text = {placeholder}>
			</textarea>
		</div>
		<div id = "right-cont">
	        <div id = "preview"
	                dangerouslySetInnerHTML={{
	                  __html: marked(this.state.inputValue)
	                }}>
	        </div>
        </div>

      </div> 
      <div className = "signature"><h5>By Sofia Lopez</h5></div>
    </div> /*end of my app*/

  );}
}