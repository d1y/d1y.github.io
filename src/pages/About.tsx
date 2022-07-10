import { Text, Note, Code, Dot } from '@geist-ui/react'
export default (<>
  <Text>宅男一枚, 没事喜欢写写代码</Text>
  <Note label={false}>
    FIXME: <Code>Write more about yourself</Code>
  </Note>
  <div style={{
    marginTop: '42px',
  }}>
    <Dot style={{ marginRight: '20px' }}>吃饭</Dot>
    <Dot style={{ marginRight: '20px' }} type="success">睡觉</Dot>
    <Dot style={{ marginRight: '20px' }} type="warning">写代码</Dot>
    <Dot style={{ marginRight: '20px' }} type="error">读书</Dot>
    <Dot type="error">unknow state</Dot>
  </div>
</>)