import React from 'react'

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';

const Login = ({onLoginSubmitHandler}) => {

  return (<App>

    <Split flex='left' separator={true}>

      <Article>
        <Section full={true} colorIndex='brand' texture='url(img/splash.png)' pad='large' justify='center' align='center'>
          <Heading align='center' tag='h1' strong={true}>ToothCrate</Heading>
          <Paragraph align='center' size='large'>
            Inventory management made easy
          </Paragraph>
        </Section>
      </Article>

      <Sidebar justify='between' align='center' pad='none' size='large'>
        <span/>
        <LoginForm align='center' title='Login' onSubmit={onLoginSubmitHandler} rememberMe={true}/>
        <Footer direction='row' size='small' pad={{
            horizontal: 'medium',
            vertical: 'small'
          }}>
          <span className='secondary'>&copy; 2017 Invent/Story</span>
        </Footer>
      </Sidebar>

    </Split>
  </App>)
}

export default Login;
