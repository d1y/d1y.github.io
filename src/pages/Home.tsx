import { Page, Text, Image, Display, Tabs, Dot } from '@geist-ui/react'
import { Github, Hash } from '@geist-ui/icons'

import About from './About'
import Project from './Project'

const labTabs = [
  {
    title: '项目',
    icon: Github,
    view: Project,
  },
  // {
  //   title: '实验室',
  //   icon: Triangle,
  // },
  {
    title: '关于我',
    icon: Hash,
    view: About
  }
]

const App = () => {
  return (
    <Page dotBackdrop width="800px" padding={0}>
      <Display
        title="d1yのlab"
        caption={
          <div style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}>
            <Text span font={2} style={{
              position: `relative`,
              top: -2,
              marginRight: 8,
            }}>#</Text>
            <Text color='#333' font={1} span b>
              宅男的奇思妙想
            </Text>{' '}
          </div>
        }>
        <Image width="120px" src="https://avatars.githubusercontent.com/u/45585937?v=4" draggable={false} />
      </Display>
      <Display width={420}>
        <Tabs initialValue="0">
          {labTabs.map((item,index)=> {
            return <Tabs.Item key={index} label={<>
              <item.icon color='#333' />
              <Text>{ item.title }</Text>
            </>} value={index.toString()}>
              { item.view }
            </Tabs.Item>
          })}
        </Tabs>
      </Display>
    </Page>
  )
}

export default App