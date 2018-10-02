
import React, {Component} from 'react';
class Display extends Component{
    state = {
        data : [],
    }
    componentDidMount(){
        return fetch('http://127.0.0.1:8000/get-data/')
            .then(res => res.json())
            .then(json => this.setState(
                { data : json}
                , () => console.log(this.state.data.cnn) //this line is for debugging
                ));
    }
    render(){
        //checking if data is there in the state
        console.log("inside render")
        console.log(this.state.data.cnn);
        return(
            <div>
                <h2>From CNN news</h2>
                {this.state.data.cnn && this.state.data.cnn.map( (news,id) => {
                    console.log('news is', news) 
                    return (
                        <div key={`cnn_${id}`}>
                        {news['created_at']}
                        {news['full_text']}
                        </div>
                    )} 
                )}
                <h2>From NYTimes news</h2>
                {this.state.data.nytimes && this.state.data.nytimes.map( (news,id) => {
                    console.log('news is', news) 
                    return (
                        <div key={`cnn_${id}`}>
                        {news['created_at']}
                        {news['full_text']}
                        </div>
                    )} 
                )}
            </div>
        )
    }
}

export default Display;