import React, {useEffect} from 'react'
import './index.styl'

// console.log("zhopa");

export function Content() {
    
    
    // require('./index.styl')
    // this.state ={ data: {}, isFetching: true, error: null };
    // const[state, setState]= useState(data:{})
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v4/launches/latest')
            .then(response => response.json())
            .then(result => 
                console.log("result", result)
                
                // setState({data: result}));
            // .catch((e) => {
            //   console.log(e);
            //   this.setState({data: result, isFetching: false, error: e }));
            // }
            );
    },[])


    return <section className="content">
        <h1>Content page</h1>
    </section>
}