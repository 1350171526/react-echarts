import anhui from '@/assets/map/anhui.json'
import aomen from '@/assets/map/aomen.json'
import beijing from '@/assets/map/beijing.json'
import chongqing from '@/assets/map/chongqing.json'
import fujian from '@/assets/map/fujian.json'
import gansu from '@/assets/map/gansu.json'
import guangdong from '@/assets/map/guangdong.json'
import guangxi from '@/assets/map/guangxi.json'
import guizhou from '@/assets/map/guizhou.json'
import hainan from '@/assets/map/hainan.json'
import hebei from '@/assets/map/hebei.json'
import heilongjiang from '@/assets/map/heilongjiang.json'
import henan from '@/assets/map/henan.json'
import hubei from '@/assets/map/hubei.json'
import hunan from '@/assets/map/hunan.json'
import jiangsu from '@/assets/map/jiangsu.json'
import jiangxi from '@/assets/map/jiangxi.json'
import jilin from '@/assets/map/jilin.json'
import liaoning from '@/assets/map/liaoning.json'
import neimenggu from '@/assets/map/neimenggu.json'
import ningxia from '@/assets/map/ningxia.json'
import qinghai from '@/assets/map/qinghai.json'
import shandong from '@/assets/map/shandong.json'
import shanghai from '@/assets/map/shanghai.json'
import shanxi from '@/assets/map/shanxi.json'
import shanxi_1 from '@/assets/map/shanxi-1.json'
import sichuan from '@/assets/map/sichuan.json'
import taiwan from '@/assets/map/taiwan.json'
import tianjin from '@/assets/map/tianjin.json'
import xianggang from '@/assets/map/xianggang.json'
import xinjiang from '@/assets/map/xinjiang.json'
import xizang from '@/assets/map/xizang.json'
import yunnan from '@/assets/map/yunnan.json'
import zhejiang from '@/assets/map/zhejiang.json'

const mapArr = [anhui,aomen,beijing,chongqing,fujian,gansu,guangdong,guangxi,guizhou,hainan,hebei,
  heilongjiang,henan,hubei,hunan,jiangsu,jiangxi,jilin,liaoning,neimenggu,ningxia,qinghai,shandong,
  shanghai,shanxi,shanxi_1,sichuan,taiwan,tianjin,xianggang,xinjiang,xizang,yunnan,zhejiang]

const getMap = (code) => {
  if(code === '710000'){
      return taiwan
  }
  const map = mapArr.find((item)=>{
    let adcode;
    adcode = item.features[0].properties.parent.adcode ? item.features[0].properties.parent.adcode.toString() : JSON.parse(item.features[0].properties.parent).adcode.toString()
    return adcode === code
  })
  return map
}

export {getMap}
