import React from 'react';

class Home extends React.Component {


  sendRequest(url, index) {
    fetch(url,{
      method:"GET"
    })
    .then(res => {
      return res.text();
    })
    .then(res => {
      this.setState({
        ['res' + index]: res
      });
      console.log(res);
      return res;
    })
    .catch(function(err){
      console.log("Fetch错误:"+err);
    });
  }
  componentWillMount() {
    this.state = {
      res1: '',
      res2: '',
      res3: ''
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="body">
        <h1>Link tests</h1>
        <div class="block">
          <div>link: "a/ba/cc" <button onClick ={()=>this.sendRequest('/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/api/a/ba/cc', 1)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res1}</b></div>
        </div>
        <div class="block">
          <div>link: "/b" <button  onClick ={()=>this.sendRequest('/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/api/b', 2)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res2}</b></div>
        </div>
        <div class="block">
          <div>link: "/c" <button  onClick ={()=>this.sendRequest('/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/api/c', 3)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res3}</b></div>
        </div>
      </div>
    )
  }
}

export default Home;