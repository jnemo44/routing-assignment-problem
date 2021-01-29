import React, { Component } from 'react';
import {Route, NavLink, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
        <div className="App">
        <nav>
          <ul style={{listStyle:'none', margin: 'auto', padding:'0'}}>
            <li style={{margin:'10px', display: 'inline-block'}}>
              <NavLink 
                to="/courses"
                activeStyle={{
                  color:'red',
                  textDecoration:'underline'
                }}
                >Courses</NavLink></li>
            <li style={{margin:'10px', display: 'inline-block'}}>
              <NavLink 
                to="/users"
                activeStyle={{
                  color:'red',
                  textDecoration:'underline'
                }}
                >Users</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/courses' component={Courses}/>
          <Route path='/users' component={Users}/>
          {/*<Route path={'/courses/:courseId'} component={Course}/>*/}
        </Switch>
        
      
        <ol style={{textAlign: 'left'}}>
          <p><span>&#10003;</span>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</p>
          <p><span>&#10003;</span>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</p>
          <p><span>&#10003;</span>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</p>
          <p><span>&#10003;</span>Pass the course ID to the "Course" page and output it there</p>
          <p><span>&#10003;</span>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</p>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>

        </div>     
    );
  }
}

export default App;
