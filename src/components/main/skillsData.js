import node from '../../assets/skills/node.png'
import spring from '../../assets/skills/spring.png'
import mysql from '../../assets/skills/mysql.png'
import c from '../../assets/skills/c.png'
import java from '../../assets/skills/java.png'
import react from '../../assets/skills/react.png'
import python from '../../assets/skills/python.png'
import linux from '../../assets/skills/linux.png'
import typescript from '../../assets/skills/typescript.png'
import flutter from '../../assets/skills/flutter.png'
import figma from '../../assets/skills/figma.png'
import photoshop from '../../assets/skills/photoshop.png'
import illustrator from '../../assets/skills/illustrator.png'
import unreal from '../../assets/skills/unreal.png'
import blender from '../../assets/skills/blender.png'

// TOPPER의 기술들 — 기술을 추가/삭제하려면 이 배열만 수정한다. (5열 그리드, 순서대로 배치)
// w/h: 타일(250×250) 안에서 로고가 차지하는 크기(px), fit: 'contain' | 'cover'(기본)
// crop: 로고 이미지에 여백이 있어 Figma에서 잘라 쓴 경우의 위치 보정
export const SKILLS = [
  { name: 'Node.js', src: node, w: 130, h: 80, fit: 'contain' },
  {
    name: 'Spring',
    src: spring,
    w: 137,
    h: 120,
    crop: { left: '-14.08%', top: '-0.27%', width: '129.2%', height: '100.19%' },
  },
  { name: 'MySQL', src: mysql, w: 130, h: 80, fit: 'contain' },
  { name: 'C', src: c, w: 72, h: 80 },
  { name: 'Java', src: java, w: 54, h: 100 },
  { name: 'React', src: react, w: 90, h: 80 },
  { name: 'Python', src: python, w: 80, h: 80 },
  { name: 'Linux', src: linux, w: 153, h: 65 },
  { name: 'TypeScript', src: typescript, w: 80, h: 80 },
  { name: 'Flutter', src: flutter, w: 80, h: 80 },
  { name: 'Figma', src: figma, w: 53, h: 80 },
  { name: 'Photoshop', src: photoshop, w: 80, h: 80 },
  { name: 'Illustrator', src: illustrator, w: 80, h: 80 },
  { name: 'Unreal Engine', src: unreal, w: 110, h: 110 },
  { name: 'Blender', src: blender, w: 98, h: 80 },
]
