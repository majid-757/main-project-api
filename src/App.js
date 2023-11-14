import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route path="/checkout" render={() => <h2>Checkout Page</h2>} />
              <Route path="/" exact component={Shopping} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App
