const WebSocket = require('ws');
const axios = require('axios')

// 处理 WebSocket 连接
const handleWebSocket =  (server) => {
  const WebSocket = require('ws')

  const wss = new WebSocket.Server({ port: 3002 })

  wss.on('connection', (ws) => {
    ws.on('message', message => {
      console.log(`Received message => ${message}`)
    })
    setInterval(async ()=>{
      const res = await getWeather()
      ws.send(JSON.stringify(res))
    },5000)
  })
};

const getWeather = async () => {
  const res = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
    params: {
      key: 'acca7d00d4361354f0f92e5452443bd4', 
      city: 410100, 
      extensions: 'base' 
    }
  })
  return res.data.lives[0]
}

module.exports = handleWebSocket;