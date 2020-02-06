import React from 'react';
import Document from './Document';
import { BrowserRouter, Link } from 'react-router-dom';
import  './index.css';


const documents = [
  {title: 'Document1', description: 'Document1 description'},
  {title: 'Document2', description: 'Document2 description'},
  {title: 'Document3', description: 'Document3 description'},
  {title: 'Document4', description: 'Document4 description'}
]


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: documents,
      term: '',
      isSubmitted: false
    }
  }
  
  searchHandler = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    });
  }

  render() {
    return (
      <BrowserRouter>  
        <div>
            <div className={`${this.state.isSubmitted ? 'result-wrap' : 'wrap'}`}>
                <input type="text"  onChange={this.searchHandler} value={this.state.term}/>
               <button className='button'type="submit" onClick={this.onSubmit}>Search</button>
            </div>
            <Link to={`param1=${this.state.term}`} className='search-res'>
              {this.state.isSubmitted && <Document documents={this.state.documents} term={this.state.term}/>}
           </Link>   
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
