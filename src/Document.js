import React from 'react';
import  './index.css';


const searchingFor = (term) => {
    return function(x) {
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Document extends React.Component {
    render() {
        return(
            <div>
                {this.props.documents.filter(searchingFor(this.props.term)).map((document) => {
                    return (
                        <div className="result">
                            <a href="#">{document.title}</a>
                            <div>{document.description}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
} 

export default Document