import React from 'react'
//if we have 
function Hoc(WrappedComponent,entity) {
  return class extends React.Component{
      state={
          data:[],
          term:""
      }
      componentDidMount(){
          const fetchData= async () => {
            //fetching
            const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
            //json form
            const json = await res.json();
           this.setstate({...this.state,data:json});
            console.log(json);
          };
          fetchData();
    
      }
      render(){
          let {term,data } =this.state
         let filteredData =data.filter((d)=>{
             if(entity===""){
                 const {name}=d;
                 return name.indexOf(term)>=0

             }
             if(entity ==="todos"){
                 const {title} =d
                 return title.indexOf(term)>=0
             }
         })
          return(
              <div>

                  <h2>{entity}</h2>
                  <input
            type="text"
            value={term}
            onChange={(e) => {
              this.setState({...this.state,term:e.target.value});
            }}
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
              </div>
          )

      }
  }
}

export default Hoc