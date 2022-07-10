import { Grid ,Card, Text, Spacer } from '@geist-ui/react'
import { Github } from '@geist-ui/icons'
import App from '../App'

const projects = [
  {
    title: 'YY播放器',
    desc: '一个支持扩展播放源的播放器, 兼容 ZY-Player',
    lang: 'dart',
    repo: 'waifu-project/movie'
  },
  {
    title: 'AppCheck',
    desc: '在Web下支持检测APK使用的技术栈, 可用于调研跨平台技术',
    lang: 'typescript',
    repo: 'app-checker/appcheck_lab'
  },
  {
    title: 'Icns Preview',
    desc: '让VScode支持预览icns格式图标',
    lang: 'typescript',
    repo: 'icnskit/icns_preview'
  },
  {
    title: 'b23',
    desc: '可支持将B站在线视频转为音频',
    lang: 'go',
    repo: 'd1y/b23'
  },
  {
    title: 'pslite',
    desc: '轻量级PS, 全平台可用(Macos下应该不会翻车)',
    lang: 'go',
    repo: 'waifu-project/pslite'
  },
  {
    title: '星火商店(Flutter)',
    desc: '星火商店 flutter(可用于学习参考)',
    lang: 'dart',
    repo: 'waifu-project/spark_store_flutter'
  },
  {
    title: 'iTodo',
    desc: '一个VScode下的TODO任务板(自用)',
    lang: 'javascript',
    repo: 'waifu-project/iTodo'
  },
  {
    title: 'Deepin社区(Flutter)',
    desc: '用Flutter实现的Deepin社区客户端',
    lang: 'dart',
    repo: 'waifu-project/deepin'
  },
  {
    title: 'J2ME-Loader魔改版',
    desc: '配合自己爬到的游戏资源 waifu-project/j2me_games',
    lang: 'java',
    repo: 'waifu-project/J2ME-Loader'
  },
  {
    title: 'inet',
    desc: '校园网登录客户端',
    lang: 'go',
    repo: 'jsxxzy/inet'
  }
]

export default (<>
  <Grid.Container gap={1.5}>
    {projects.map(item => (
      <Grid xs={8} key={item.repo}>
        <Card width="100%" style={{
          position: 'relative',
          cursor: 'pointer',
        }} onClick={()=> {
          window.open(`https://github.com/${ item.repo }`)
        }}>
          <Text h4 my={0} style={{ textTransform: 'uppercase' }}>{ item.title }</Text>
          <Text font="10px" style={{
            lineHeight: '18px',
            margin: 0,
            marginBottom: '42px',
          }} type='secondary'>{ item.desc }</Text>
          <div style={{
            position: 'absolute',
            bottom: '5px',
            left: '12px',
            width: '100%',
            display: 'flex',
          }}>
            <Github size={16} />
            <Spacer w="3px" />
            <Text p b small style={{
              margin: 0,
              fontSize: '12px',
            }} type='secondary'>{ item.repo }</Text>
          </div>
        </Card>
      </Grid>
    ))}
  </Grid.Container>
</>)