import React from 'react';

class Home extends React.Component {


  sendGetRequest(url, index) {
    url = 'http://172.18.18.76:8000/9988113' + url;
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
    this.state = {
      setUrl: "",
      setData: ""
    }
  }

  setUrlChange (value) {
    this.setState({
      setUrl: value
    })
  }

  setDataChange (value) {
    this.setState({
      setData: value
    });
    console.dir(this.state);
  }

  postData (url, data) {
    url = 'http://172.18.18.76:8000/9988113/initdataformock/api' + url;
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
  }

  sendPostRequest() {
    if (this.state.setData && typeof JSON.parse(this.state.setData) == "object"){
      this.postData(this.state.setUrl, JSON.parse(this.state.setData))
      .then(data => alert(data.msg))
      .catch(error => console.log(error))
    } else {
      alert('请输入正确的json')
    }
  }

  render () {
    return (
      <div className="body">
        <h1>Link tests</h1>
        <div class="block">
          <div>配置数据: </div>
          <div>url: <input type="text" value={this.state.setUrl} onChange={e => this.setUrlChange(e.target.value)} style={{"width":"500px","height":"20px","margin-bottom":"15px"}}/><br/>
               data: <input type="text" value={this.state.setData} onChange={e => this.setDataChange(e.target.value)} style={{"width":"500px","height":"20px"}}/>
               <button onClick ={()=>this.sendPostRequest()} >send</button></div>
        </div>
        <div>获取数据: </div>
        <div class="block">
          <div>link: "a/ba/cc" <button onClick ={()=>this.sendGetRequest('/api/a/ba/cc', 1)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res1}</b></div>
        </div>
        <div class="block">
          <div>link: "/b" <button  onClick ={()=>this.sendGetRequest('/api/b', 2)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res2}</b></div>
        </div>
        <div class="block">
          <div>link: "/c" <button  onClick ={()=>this.sendGetRequest('/api/c', 3)} >send</button></div>
          <div>response: <b className="resTxt">{this.state.res3}</b></div>
        </div>
      </div>
    )
  }
}

export default Home;