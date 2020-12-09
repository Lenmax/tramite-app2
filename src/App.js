import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import ResponsiveBox, { Row, Col, Item, Location } from 'devextreme-react/responsive-box';
import Tabs from 'devextreme-react/tabs';


import { tabs } from './Services/data.js';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    
    this.onTabsSelectionChanged = this.onTabsSelectionChanged.bind(this);
  }

  onTabsSelectionChanged(args) {
    if(args.name === 'selectedIndex') {
      this.setState({
        selectedIndex: args.value
      });
    }
  }

  render() {
    const { selectedIndex } = this.state;
    return (
        <ResponsiveBox>
            <Row ratio={0.} />
            <Row ratio={10} />
            <Row ratio={0.} />
            <Col ratio={0.3} screen="md lg"/>
            <Col ratio={4}/>
            <Col ratio={0.3} screen="md lg"/>

            <Item>
                <Location screen="md lg" row={0} col={0} colspan={3}/>
                <Location screen="xs sm" row={0} col={0}/>
                <div className="header item">
                    <h1>Tramite App</h1>
                </div>
            </Item>

            <Item>
                <Location screen="md lg" row={1} col={1}/>
                <Location screen="xs sm" row={1} col={0}/>
                <div  id="tabs" className="content item">
                  <Tabs
                    dataSource={tabs}
                    selectedIndex={selectedIndex}
                    onOptionChanged={this.onTabsSelectionChanged}
                  />
                  
                  <div className="dx-field">
                    <div className="dx-field-label">Selected content:</div>
                    <div className="dx-field-value-static left-aligned">
                      {tabs[selectedIndex].content}
                    </div>
                  </div>
                </div>
            </Item>

            <Item>
                <Location screen="md lg" row={1} col={0}/>
                {/* <div className="left-side-bar item">
                    <p>Left Bar</p>
                </div> */}
            </Item>

            <Item>
                <Location screen="md lg" row={1} col={2}/>
                {/* <div className="right-side-bar item">
                    <p>Right Bar</p>
                </div> */}
            </Item>

            <Item>
                <Location screen="md lg" row={2} col={0} colspan={3}/>
                <Location screen="xs sm" row={2} col={0}/>
                <div className="footer item">
                    <h3>© Unsaac 2020</h3>
                </div>
            </Item>
        </ResponsiveBox>
    );
  }
}
 
export default App;