import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Menu, Icon, Switch, Spin, Alert } from 'antd';
const {Header, Sider, Content} = Layout;
const SubMenu = Menu;

class App extends Component {

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  render() {
    return (
      <div className="App">
        <Layout>
                <Header className="header"></Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" title={<span><Icon type="user" />订单管理</span>}>
                            <Menu.Item key="1">订单查询</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />用户权限</span>}>
                            <Menu.Item key="5">用户管理</Menu.Item>
                            <Menu.Item key="6">角色管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Content>
                        <div>Content</div>
                        <Switch defaultChecked onChange={this.onChange.bind(this)} />
                        <Spin tip="Loading...">
                          <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                          />
                        </Spin>
                    </Content>
                </Layout>
            </Layout>
      </div>
    );
  }
}

export default App;
