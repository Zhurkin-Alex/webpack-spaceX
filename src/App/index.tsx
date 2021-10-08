import React,{useEffect} from 'react'
// import {
//     Link,
//     Switch,
//     Route,
// } from 'react-router-dom'
// import { Pages } from 'Pages/Routes'

export function App() {
    require('./index.styl')
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

    return <React.Fragment>
        {/* <div className="menu">
            {Pages.map((page, index) => <Link to={page.link} key={index}>{page.title}</Link>)}
        </div>

        <Switch>
            {Pages.map((page, index) => <Route exact path={page.link} component={page.component} key={index} />)}
        </Switch> */}
    </React.Fragment>
}